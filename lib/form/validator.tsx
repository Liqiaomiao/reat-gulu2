import {FormValue} from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: {
        name: string,
        validate: (value: string) => Promise<void>
    }
}

type FormRules = Array<FormRule>

interface ErrorValue {
    [K: string]: string[]
}

const isEmpty = (whatever: any) => {
    return whatever === '' || whatever === undefined || whatever === null
}
export const noError = (errors: ErrorValue) => {
    return Object.keys(errors).length === 0
}
const Validator = (formData: FormValue, rules: FormRules): ErrorValue => {
    let errors: any = {}
    const addRule = (key: string, message: string | Promise<void>) => {
        if (!errors[key]) {
            errors[key] = []
        }
        errors[key].push(message)


    }
    rules.map(rule => {
        const value = formData[rule.key]
        if (rule.validator) {
            const result = rule.validator.validate(value)
            addRule(rule.key, result)
        }
        if (isEmpty(value) && rule.required) {
            addRule(rule.key, `${rule.key} is required`)
        }
        if (!isEmpty(value) && rule.minLength && value.length < rule.minLength) {
            addRule(rule.key, `${rule.key} at least ${rule.minLength} words`)
        }
        if (!isEmpty(value) && rule.maxLength && value.length > rule.maxLength) {
            addRule(rule.key, `${rule.key} shouldn't more than ${rule.maxLength} words`)
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addRule(rule.key, `invalid pattern`)
        }
    })
    console.log(flat(Object.values(errors)));
    return errors
}

function flat(array: Array<any>) {
    const result = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            result.push(...array[i])
        } else {
            result.push(array[i])
        }
    }
    return result
}

export default Validator
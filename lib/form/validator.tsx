import {FormValue} from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
}

type FormRules = Array<FormRule>

interface ErrorValue {
    [K: string]: any
}

const isEmpty = (whatever: any) => {
    return whatever === '' || whatever === undefined || whatever === null
}

const Validator = (formData: FormValue, rules: FormRules): ErrorValue => {
    let errors: any = {}
    const addRule = (key: string, message: string) => {
        if (!errors[key]) {
            errors[key] = []
        }
        errors[key].push(message)


    }
    rules.map(rule => {
        const value = formData[rule.key]
        if (isEmpty(value) && rule.required) {
            addRule(rule.key, `${rule.key} is required`)
        }
        console.log(isEmpty(value), rule, value.length, rule.maxLength);
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
    return errors
}
export default Validator
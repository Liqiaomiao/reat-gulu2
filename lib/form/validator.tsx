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

interface ErrorInfo {
    message: string;
    promise?: Promise<void>
}

const isEmpty = (whatever: any) => {
    return whatever === '' || whatever === undefined || whatever === null
}
export const noError = (errors: ErrorValue) => {
    return Object.keys(errors).length === 0
}
const Validator = (formData: FormValue, rules: FormRules, callback: (errors: ErrorValue) => void): void => {
    let errors: any = {}
    const addRule = (key: string, errorInfo: ErrorInfo) => {
        if (!errors[key]) {
            errors[key] = []
        }
        errors[key].push(errorInfo)


    }
    rules.map(rule => {
        const value = formData[rule.key]
        if (rule.validator) {
            const promise = rule.validator.validate(value)
            addRule(rule.key, {message: 'username already existed', promise})
        }
        if (isEmpty(value) && rule.required) {
            addRule(rule.key, {message: `${rule.key} is required`})
        }
        if (!isEmpty(value) && rule.minLength && value.length < rule.minLength) {
            addRule(rule.key, {message: `${rule.key} at least ${rule.minLength} words`})
        }
        if (!isEmpty(value) && rule.maxLength && value.length > rule.maxLength) {
            addRule(rule.key, {message: `${rule.key} shouldn't more than ${rule.maxLength} words`})
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addRule(rule.key, {message: `invalid pattern`})
        }
    })
    let promiseList = flat(Object.values(errors))
        .filter(item => item.promise)
        .map(item => item.promise)
    let result = fromEntries(Object.keys(errors)
        .map(key =>
            // errors[key] [{message:'',promise}]
            [key, errors[key].map((item: ErrorInfo) => item.message)]
        ))
    Promise.all(promiseList)
        .then(() => {
                callback(result)
            },
            () => {
                callback(result)
            })
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

function fromEntries(array: Array<[string, string[]]>) {
    const result: ErrorValue = {};
    for (var i = 0; i < array.length; i++) {
        result[array[i][0]] = array[i][1]
    }
    return result
}

export default Validator
import { FormValue } from "./form";

interface FormRule {
    key: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
    validator?: (value: string) => Promise<string>
}

type FormRules = Array<FormRule>

interface ErrorValue {
    [K: string]: string[]
}

type ErrorInfo = string | Promise<string>
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
            const promise = rule.validator(value)
            addRule(rule.key, promise)
        }
        if (isEmpty(value) && rule.required) {
            addRule(rule.key, 'required')
        }
        if (!isEmpty(value) && rule.minLength && value.length < rule.minLength) {
            addRule(rule.key, `minLength`)
        }
        if (!isEmpty(value) && rule.maxLength && value.length > rule.maxLength) {
            addRule(rule.key, `maxLength`)
        }
        if (rule.pattern && !(rule.pattern.test(value))) {
            addRule(rule.key, `invalid pattern`)
        }
    })
    const flattenErrors = flat(Object.keys(errors).map(key =>
        errors[key].map((error: ErrorInfo) =>
            [key, error]
        )
    ))
    const newPromise = flattenErrors.map(([key, error]) =>
        (error instanceof Promise ? error : Promise.reject(error)) // 如果不是promise转成pormise = > Promise.reject(error)
            .then(() => {
                return [key, undefined]
            }, (reason: string) => {
                return [key, reason]
            })
    )
    //  let promiseList = flat(Object.values(errors))
    Promise.all(newPromise).then(results => {
        console.log('promise all', results)
        callback(zip(results.filter(item => item[1])))
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

function zip(arr: Array<[string, string]>) {
    let result: ErrorValue = {}
    arr.map(([key, value]) => {
        result[key] = result[key] || []
        result[key].push(value)
    })
    return result
}

//
// function fromEntries(array: Array<[string, string[]]>) {
//     const result: ErrorValue = {};
//     for (var i = 0; i < array.length; i++) {
//         result[array[i][0]] = array[i][1]
//     }
//     return result
// }

export default Validator
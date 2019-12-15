import React, { useState, Fragment } from "react";
import Form, { FormValue } from "./form";
import Validator, { noError } from "./validator";
import Button from "../button/button";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'andy',
        password: '12345'
    })
    const [errors, setErrors] = useState({})
    const [fields] = useState([
        { name: 'username', label: '用户名', input: { type: 'text' } },
        { name: 'password', label: '密码', input: { type: 'password' } }
    ])
    const usernamearr = ['frank', 'lisa', 'andy', 'lester']
    const checkUsername = (username: string, success: () => void, fail: () => void) => {
        setTimeout(() => {
            if (usernamearr.indexOf(username) > -1) {
                fail()
            } else {
                success()
            }
        }, 1000)

    }
    const validate = (username: string) => {
        return new Promise<string>((resolve, reject) => {
            checkUsername(username, resolve, () => reject('unique'))
        })
    }
    const onsubmit = (e: React.FormEvent) => {
        const formRules = [
            { key: 'username', required: true },
            { key: 'username', minLength: 3, maxLength: 5 },
            {
                key: 'username', validator: validate
            },
            {
                key: 'username', validator: validate
            },
            { key: 'password', required: true, minLength: 3, pattern: /[A-Za-z0-9]+/ }
        ]
        Validator(formData, formRules, (errors) => {
            if (!noError(errors)) {
                setErrors(errors)
                console.log(errors)
            }
        })


    }
    const translateHandler = (message) => {
        const map = {
            unique: '该用户名已存在'
        }
        console.log('handler', message, map[message])
        return map[message]
    }
    return (
        <div>
            <Form value={formData} fields={fields} buttons={
                (<Fragment>
                    <Button type='submit' className='my-button' level='primary'>确定</Button>
                    <Button>取消</Button>
                </Fragment>)
            } onSubmit={onsubmit}
                errors={errors}
                onChange={(newValue) => setFormData(newValue)}
                translate={translateHandler}
            >
            </Form>
        </div>
    )
}
export default FormExample;
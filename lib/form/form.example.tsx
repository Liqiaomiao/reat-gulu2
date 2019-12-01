import React, {useState, Fragment} from "react";
import Form, {FormValue} from "./form";
import Validator, {noError} from "./validator";

const FormExample: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormValue>({
        username: 'andy',
        password: '12345'
    })
    const [errors, setErrors] = useState({})
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type: 'text'}},
        {name: 'password', label: '密码', input: {type: 'password'}}
    ])
    const onsubmit = (e: React.FormEvent) => {
        const formRules = [
            {key: 'username', required: true},
            {key: 'username', minLength: 3, maxLength: 5},
            {key: 'password', minLength: 3, pattern: /[A-Za-z0-9]+/}
        ]
        const errors = Validator(formData, formRules)
        if(!noError(errors)){
            setErrors(errors)
        }

    }
    return (
        <div>
            <Form value={formData} fields={fields} buttons={
                (<Fragment>
                    <button type='submit'>确定</button>
                    <button>取消</button>
                </Fragment>)
            } onSubmit={onsubmit}
                  errors={errors}
                  onChange={(newValue) => setFormData(newValue)}
            >
            </Form>
        </div>
    )
}
export default FormExample;
import React, {useState, Fragment} from "react";
import Form from "./form";
const FormExample:React.FunctionComponent = ()=>{
    const [formData, setFormData] = useState({
        name:'andy',
        password:'12345'
    })
    const [fields,setFields] = useState([
        {name:'username',label:'用户名',input:{type:'text'}},
        {name:'password',label:'密码',input:{type:'password'}}
    ])
    return (
        <div>
            <Form value={formData} fields = {fields} buttons={
                (<Fragment>
                    <button type='submit'>确定</button>
                    <button>取消</button>
                </Fragment>)
            }>
            </Form>
        </div>
    )
}
export  default FormExample;
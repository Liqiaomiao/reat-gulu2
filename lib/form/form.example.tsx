import React, {useState, Fragment} from "react";
import Form,{FormValue} from "./form";
const FormExample:React.FunctionComponent = ()=>{
    const [formData, setFormData] = useState<FormValue>({
        username:'andy',
        password:'12345'
    })
    const [fields] = useState([
        {name:'username',label:'用户名',input:{type:'text'}},
        {name:'password',label:'密码',input:{type:'password'}}
    ])
    const onsubmit = (e:React.FormEvent)=>{
        console.log(formData);
    }
    return (
        <div>
            <Form value={formData} fields = {fields} buttons={
                (<Fragment>
                    <button type='submit'>确定</button>
                    <button>取消</button>
                </Fragment>)
            } onSubmit={onsubmit}
              onChange={(newValue)=>setFormData(newValue)}
            >
            </Form>
        </div>
    )
}
export  default FormExample;
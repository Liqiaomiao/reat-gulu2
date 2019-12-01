import React, {ReactFragment} from "react";
export interface FormValue{
    [T:string]:any
}
interface Props {
    value: FormValue,
    fields: Array<{name:string,label:string,input:{type:string}}>,
    buttons:ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value:FormValue)=> void
}
const Form:React.FunctionComponent<Props> = (props)=>{
    const onsubmit:React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        props.onSubmit(e)
    }
    const formData = props.value
    const onchange=(a:string,b:string)=>{
       props.onChange({...formData,[a]:b})
    }
    return (
        <form onSubmit={onsubmit}>
            {props.fields.map(item=>(
                <div key={item.name}>
                    {item.label}
                    <input type={item.input.type}
                           name={item.name}
                           value={formData[item.name]}
                           onChange={(e:React.ChangeEvent<HTMLInputElement>)=>onchange(item.name,e.target.value)}/>
                </div>
            ))}
            <div>
                {props.buttons}
            </div>
        </form>
    )
}
export default Form
import React, {ReactFragment} from "react";
export interface FormValue{
    [T:string]:any
}
interface Props {
    value: FormValue,
    fields: Array<{name:string,label:string,input:{type:string}}>,
    buttons:ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value:FormValue)=> void,
    errors:{[K:string]:string[]}
}
const Form:React.FunctionComponent<Props> = (props)=>{
    const onsubmit:React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        props.onSubmit(e)
    }
    const formData = props.value
    const onchange=(a:string,e:React.ChangeEvent<HTMLInputElement>)=>{
       props.onChange({...formData,[a]:e.target.value})
    }
    return (
        <form onSubmit={onsubmit}>
            {props.fields.map(item=>(
                <div key={item.name}>
                    {item.label}
                    <input type={item.input.type}
                           name={item.name}
                           value={formData[item.name]}
                           onChange={onchange.bind(null,item.name)}/>
                    <div>{props.errors[item.name]}</div>
                </div>
            ))}
            <div>
                {props.buttons}
            </div>
        </form>
    )
}
export default Form
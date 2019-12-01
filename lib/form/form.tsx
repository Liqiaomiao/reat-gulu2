import React, {ReactFragment} from "react";
interface Props {
    value: {[T:string]:any},
    fields: Array<{name:string,label:string,input:{type:string}}>,
    buttons:ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>
}
const Form:React.FunctionComponent<Props> = (props)=>{
    const onsubmit:React.FormEventHandler<HTMLFormElement> = (e)=>{
        e.preventDefault()
        props.onSubmit(e)
    }
    return (
        <form onSubmit={onsubmit}>
            {props.fields.map(item=>(
                <div key={item.name}>
                    {item.label}
                    <input type={item.input.type} name={item.name}/>
                </div>
            ))}
            <div>
                {props.buttons}
            </div>
        </form>
    )
}
export default Form
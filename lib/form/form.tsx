import React, {ReactFragment} from "react";
interface Props {
    value: {[T:string]:any},
    fields: Array<{name:string,label:string,input:{type:string}}>,
    buttons:ReactFragment
}
const Form:React.FunctionComponent<Props> = (props)=>{
    return (
        <form>
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
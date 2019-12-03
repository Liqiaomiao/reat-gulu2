import React, {ReactFragment} from "react";
import Input from "../Input/input";
import classes from "../helpers/classes";
import './form.scss'

export interface FormValue {
    [T: string]: any
}

interface Props {
    value: FormValue,
    fields: Array<{ name: string, label: string, input: { type: string } }>,
    buttons: ReactFragment,
    onSubmit: React.FormEventHandler<HTMLFormElement>,
    onChange: (value: FormValue) => void,
    errors: { [K: string]: string[] }
}

const Form: React.FunctionComponent<Props> = (props) => {
    const onsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const formData = props.value
    const onchange = (a: string, e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({...formData, [a]: e.target.value})
    }
    return (
        <form onSubmit={onsubmit}>
            <table>
                <tbody>
                {props.fields.map(item => (
                    <tr key={item.name} className={classes('fui-form-row')}>
                        <td className='fui-form-td'>
                            <span className="fui-form-label">
                                 {item.label}
                            </span>
                        </td>
                        <td className='fui-form-td'>
                            <Input type={item.input.type}
                                   name={item.name}
                                   value={formData[item.name]}
                                   onChange={onchange.bind(null, item.name)}/>
                            <div className='fui-form-error-tip'>{props.errors[item.name]}</div>
                        </td>


                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                {props.buttons}
            </div>
        </form>
    )
}
export default Form
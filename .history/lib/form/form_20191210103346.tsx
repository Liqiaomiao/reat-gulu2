import React, { ReactFragment } from "react";
import Input from "../Input/input";
import classes from "../helpers/classes";
import './form.scss'


export interface FormValue {
    [T: string]: any
}

interface Props {
    value: FormValue;
    fields: Array<{ name: string, label: string, input: { type: string } }>;
    buttons: ReactFragment;
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    onChange: (value: FormValue) => void;
    errors: { [K: string]: string[] };
    errorsMode?: 'first' | 'all';
    translate?: (message: string) => string
}

const Form: React.FunctionComponent<Props> = (props) => {
    const onsubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        props.onSubmit(e)
    }
    const formData = props.value
    const onchange = (a: string, e: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange({ ...formData, [a]: e.target.value })
    }
    const translate = (message: string): string => {
        const map: { [K: string]: string } = {
            minLength: '太短',
            maxLength: '太长',
            required: '必填'
        }
        console.log('translate=======', message, props.translate(message))
        return props.translate && props.translate(message) || map[message] || '未知错误'
    }
    return (
        <form onSubmit={onsubmit}>
            <table>
                <tbody>
                    {props.fields.map(item => (
                        <tr key={item.name} className={classes('gulu-form-row')}>
                            <td className='gulu-form-td'>
                                <span className="gulu-form-label">
                                    {item.label}
                                </span>
                            </td>
                            <td className={`gulu-form-td ${props.errors[item.name] ? 'gulu-form-td-error' : ''}`}>
                                <Input type={item.input.type}
                                    name={item.name}
                                    value={formData[item.name]}
                                    onChange={onchange.bind(null, item.name)} />
                                <div className='gulu-form-error-tip'>
                                    {props.errors[item.name] ?
                                        (
                                            props.errorsMode === 'first' ?
                                                translate!(props.errors[item.name][0]) :
                                                props.errors[item.name].map(name => props.translate!(name)).join(',')
                                        ) :
                                        <span>&nbsp;</span>
                                    }
                                </div>
                            </td>
                        </tr>

                    ))}
                    <tr>
                        <td className='gulu-form-td'></td>
                        <td className='gulu-form-td'>
                            {props.buttons}
                        </td>
                    </tr>
                </tbody>
            </table>

        </form>
    )
}
Form.defaultProps = {
    errorsMode: 'first'
}
export default Form
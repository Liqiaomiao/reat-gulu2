import React, {Fragment, InputHTMLAttributes} from "react";
import {scopedClassMaker} from "../../lib/helpers/classes";
import './input.scss'

const sc = scopedClassMaker('gulu-input')

interface Props extends InputHTMLAttributes <HTMLInputElement> {

}

const Input: React.FunctionComponent<Props> = (props) => {
    const {className, ...rest} = props
    return (
        <Fragment>
            <input className={sc('', {extra: className})} {...rest}></input>
        </Fragment>
    )
}
export default Input
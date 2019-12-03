import React from 'react';
import classes from "../helpers/classes";
import './button.scss'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    level?:'primary'|'default'|'dashed'|'danger'
}

const Button:React.FunctionComponent<Props>= (props)=>{
    const {className,children,...rest} = props;
    return(
        <button className={classes('gulu-button',className,`gulu-button-${props.level}`)} {...rest}>
            {children}
        </button>
    )
};
Button.defaultProps = {
    level: 'default'
}
export default Button
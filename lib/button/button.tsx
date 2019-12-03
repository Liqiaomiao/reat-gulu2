import React from 'react';
import classes from "../helpers/classes";
import './button.scss'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{

}

const Button:React.FunctionComponent<Props>= (props)=>{
    const {className,children,...rest} = props;
    return(
        <button className={classes('gulu-button',className)} {...rest}>
            {children}
        </button>
    )
};
export default Button
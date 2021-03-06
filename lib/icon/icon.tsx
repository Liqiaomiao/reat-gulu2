import React from 'react';
import './importicons.js'
import './icon.scss'
import classes from '../helpers/classes'
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string
}


const Icon:React.FunctionComponent<IconProps> = (props)=>{
    let {className, name, ...restProps} = props;
    return(
        <span>
            <svg className={classes('gulu-icon' ,className)}
                 {...restProps} >
                <use xlinkHref={`#${name}`}/>
            </svg>
        </span>
    )
};
export default Icon
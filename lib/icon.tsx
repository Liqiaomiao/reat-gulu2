import React from 'react';
import './importicons'
import './icon.scss'
interface IconProps {
    name: string,
    onClick: React.MouseEventHandler<SVGElement>
   // onClick: (e:React.MouseEvent)=> void
}
const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return(
        <span>
            <svg className='gulu-icon' onClick={props.onClick} >
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};
export default Icon
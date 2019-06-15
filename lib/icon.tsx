import React from 'react';
import './importicons'
import './icon.scss'
interface IconProps extends React.SVGAttributes<SVGElement>{
    name: string,
    onClick: React.MouseEventHandler<SVGElement>
   // onClick: (e:React.MouseEvent)=> void
}


const Icon:React.FunctionComponent<IconProps> = (props)=>{
    return(
        <span>
            <svg className='gulu-icon' {...props} >
                <use xlinkHref={`#${props.name}`}/>
            </svg>
        </span>
    )
};
export default Icon
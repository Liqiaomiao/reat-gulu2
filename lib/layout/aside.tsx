import React from 'react';
import {scopedClassMaker} from "../utils/class";
const sc = scopedClassMaker('gulu-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Aside: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props
    return (
        <div className={sc('aside',{extra:className})} {...rest}>aside</div>
    )
}
export default Aside;
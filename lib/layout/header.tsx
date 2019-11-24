import React from 'react';
import {scopedClassMaker} from "../utils/class";
const sc = scopedClassMaker('gulu-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<Props> = (props) => {
    let {className,...rest} = props
    return (
        <div className={sc('header',{extra:className})} {...rest}>header</div>
    )
};
export default Header;
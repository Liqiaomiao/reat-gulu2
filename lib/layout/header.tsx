import React from 'react';
import {scopedClassMaker} from "../../lib/helpers/classes"
const sc = scopedClassMaker('gulu-layout')
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Header: React.FunctionComponent<Props> = (props) => {
    let {className,...rest} = props
    return (
        <div className={sc('header',{extra:className})} {...rest}>{props.children}</div>
    )
};
export default Header;
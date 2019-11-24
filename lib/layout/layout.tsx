import React from 'react';
import {scopedClassMaker} from "../utils/class";
import './layout.scss'
const sc = scopedClassMaker('gulu-layout');
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Layout: React.FunctionComponent<Props> = (props) => {
    let {className,...rest} = props
    return (
        <div className={sc('',{extra:className})} {...rest}>
            {props.children}
        </div>
    )
};
export default Layout;
import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../utils/class";
import './layout.scss'
import Aside from "./aside";
const sc = scopedClassMaker('gulu-layout');
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Layout: React.FunctionComponent<Props> = (props) => {
    let {className,...rest} = props;
    let hasAside = false;
    (props.children as Array<ReactElement>).map(node=>{
        if(node.type === Aside){
            hasAside = true
        }
    })
    return (
        <div className={sc('',{extra:[className, hasAside && 'hasAside'].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
};
export default Layout;
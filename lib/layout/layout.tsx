import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../utils/class";
import './layout.scss'
import Aside from "./aside";
const sc = scopedClassMaker('gulu-layout');
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props;
    const hasAside = (props.children as Array<ReactElement>).reduce((prev,node)=> prev || node.type === Aside ,false);
    return (
        <div className={sc('',{extra:[className, hasAside ? 'hasAside':''].join(' ')})} {...rest}>
            {props.children}
        </div>
    )
};
export default Layout;
import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../utils/class";
import './layout.scss'
import Aside from "./aside";
const sc = scopedClassMaker('gulu-layout');
interface Props extends React.HTMLAttributes<HTMLElement>{

}
const Layout: React.FunctionComponent<Props> = (props) => {
    const {className,...rest} = props;
    const childern = props.children as Array<ReactElement>
    const hasAside = childern.length > 0  && childern.reduce((prev,node)=> prev || node.type === Aside ,false);
    return (
        <div className={sc({'':true,hasAside},{extra:className})} {...rest}>
            {props.children}
        </div>
    )
};
export default Layout;
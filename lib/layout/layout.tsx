import React, {ReactElement} from 'react';
import {scopedClassMaker} from "../../lib/helpers/classes"
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
export {Layout};
export {default as Header} from './header';
export {default as Aside} from './aside';
export {default as Content} from './content';
export {default as Footer} from './footer';

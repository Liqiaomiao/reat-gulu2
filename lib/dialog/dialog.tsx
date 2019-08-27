import React, {Fragment, ReactElement} from "react";
import ReactDom from 'react-dom';
import Icon from "../icon/icon";
import './dialog.scss'
import {scopedClassMaker} from "../utils/class";
interface Props {
    visible: boolean;
    footer: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    maskClosable?: boolean
}

const scopedClassName = scopedClassMaker('g-ui-dialog');
const sc  = scopedClassName;
const scAlert = scopedClassMaker('gui');
const Dialog: React.FunctionComponent<Props> = (props) =>{
    const closeMask: React.MouseEventHandler = (e)=>{
        if(props.maskClosable){
            props.onClose(e)
        }
    };
    const dialogDom =  props.visible ?
        <Fragment>
            <div className={sc('mask')} onClick={closeMask}/>
            <div className={sc('container')}>
                <div className={sc('close')} onClick={props.onClose}>
                    <Icon name='close' />
                </div>
                <header className={sc('header')}>
                    <div className={sc('title')}>提示</div>
                </header>
                <main className={sc('body')}>
                    {

                        props.children

                    }
                </main>
                <footer className={sc('footer')}>
                    {props.footer.map((item,index)=> React.cloneElement(item,{key: index}))}
                </footer>

            </div>
        </Fragment>:
        null;
    return (
        ReactDom.createPortal(dialogDom,document.body)
    )
};

interface AlertProp {
    visible: boolean;
    onClose: React.MouseEventHandler;
}
const DialogAlert: React.FunctionComponent<AlertProp> = (props)=>{

    return (
        props.visible?
        <div className={scAlert('alert')}>
            <Icon name='close' onClick={props.onClose} className={scAlert('alert-close')}/>
            {props.children}
        </div>:
            null
    )
};
const alert = (content:string)=>{
    const div = document.createElement('div');
    document.body.append(div);
    const dom  = <DialogAlert visible={true} onClose={()=>{
        ReactDom.render(React.cloneElement(dom,{visible: false}), div);
        ReactDom.unmountComponentAtNode(div);
        div.remove();
    }}>{content}</DialogAlert>;

    ReactDom.render(dom,div)
};

const confirm = (content:string, yes?:()=>void , no?:()=>void )=>{
    const div = document.createElement('div');
    document.body.append(div);
    const onYes = ()=>{
        ReactDom.render(React.cloneElement(dom),div);
        ReactDom.unmountComponentAtNode(div);
        div.remove();
        yes && yes()
    };
    const onNo = ()=>{
        ReactDom.render(React.cloneElement(dom),div);
        ReactDom.unmountComponentAtNode(div);
        div.remove();
        no && no()
    };
    const dom = <Dialog
                    visible={true}
                    footer={[
                        <button onClick={onYes}>确定</button>,
                        <button onClick={onNo}>取消</button>]}
                    onClose={onNo}>
                    {content}
                </Dialog>;
    ReactDom.render(dom,div)
};
Dialog.defaultProps = {
    maskClosable: true
};
export default Dialog
export {alert, confirm}
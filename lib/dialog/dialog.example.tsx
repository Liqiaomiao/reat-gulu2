import React, {useState} from "react";
import Dialog, {alert, confirm, modal} from "./dialog";

export default function () {
    const [x, setX]  = useState(false);
    return (
        <div>
            <div>
                <button onClick= { ()=> setX(!x)} > click</button>
                <Dialog visible = {x} onClose = {()=>setX(false)} maskClosable={false} footer = {
                    [
                        <button className={'g-ui-dialog-btn'} onClick={()=>setX(false)}>ok</button>,
                        <button className={'g-ui-dialog-btn g-ui-dialog-primary'} onClick={()=>setX(false)}>cancel</button>
                    ]
                }>
                    <div>hi</div>
                </Dialog>
            </div>
            <div>
                <button onClick={()=>alert('somthing wrong')}>alert</button>
                <button onClick={()=>{confirm('are you sure', ()=>{console.log('yes')},
                    ()=>{console.log('no')})
                }}>confirm</button>
                <button onClick={()=>{
                   const close  = modal(
                        <div>
                            <span>hello</span>
                            <button onClick={()=>{console.log('close');close()}}>close</button>
                        </div>
                    )
                }}>modal</button>
            </div>

        </div>

    )
}

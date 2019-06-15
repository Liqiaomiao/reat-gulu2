import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';
const fn:React.MouseEventHandler = (e) =>{
    console.log(e);
    console.log(e.target);

};
// const fn = (e:React.MouseEvent) =>{
//     console.log(e);
//     console.log(e.target);
//
// };
ReactDom.render(<div>
        <Icon name="wechat" onClick = {fn}/>
    </div>,
    document.getElementById('root'));
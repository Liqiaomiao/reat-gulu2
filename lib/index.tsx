import React from 'react';
import ReactDom from 'react-dom';
import Icon from './icon';
const fn:React.MouseEventHandler = (e) =>{
    console.log(e);
    console.log(e.target);
    console.log((e.target as SVGUseElement).href);
};
// const fn = (e:React.MouseEvent) =>{
//     console.log(e);
//     console.log(e.target);
//
// };
ReactDom.render(<div>
        <Icon className="wechat" name="wechat" onClick = {fn}/>
    </div>,
    document.getElementById('root'));
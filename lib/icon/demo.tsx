import React from 'react';

interface DemoProps{
    code: {default:string}
}

const Demo:React.FunctionComponent<DemoProps> = (props)=>{
    return(
        <div>
            {props.children}
            <pre>
                {props.code.default}
            </pre>
        </div>
    )
};
export default Demo
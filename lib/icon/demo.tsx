import React,{useState} from 'react';
import Highlight, { defaultProps } from "prism-react-renderer";
interface DemoProps{
    code: {default:string}
}

const Demo:React.FunctionComponent<DemoProps> = (props)=>{
    const [codeVisible, setCodeVisible] = useState(false)
    const code = (
        <Highlight {...defaultProps} code={props.code.default} language="jsx">
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={style}>
        {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                    <span {...getTokenProps({token, key})} />
                ))}
            </div>
        ))}
      </pre>
            )}
        </Highlight>
    )
    return(
        <div>
            <div>
                {props.children}
                <button className='code-toggle' onClick={()=>setCodeVisible(!codeVisible)}>{codeVisible?'隐藏代码':'显示代码'}</button>
            </div>
            {codeVisible && code}
        </div>
    )
};
export default Demo
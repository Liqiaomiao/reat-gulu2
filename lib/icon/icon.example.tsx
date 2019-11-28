import React from 'react'
import Example from './icon.example1';
import Demo from "./demo";


const IconExample:React.FunctionComponent = () => {
    return(
        <div>
            <Demo code={require('!!raw-loader!./icon.example1.tsx')}>
                <Example/>
            </Demo>
        </div>
    )
};
export default  IconExample
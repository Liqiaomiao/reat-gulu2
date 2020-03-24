import * as React from "react";
import Tree from './tree';
import {useState} from "react";


const TreeExample: React.FC = () => {
    const [array] = useState([
        {
            text: '1',
            value: '1',
            children: [{
                text: '1.1', value: '1.1',
                children: [{
                    text:'1.1.1',
                    value: '1.1.1'
                }]
            }]
        },
        {
            text: '2',
            value: '2',
            children: [{
                text: '2.1', value: '2.1',
                children: [{
                    text:'2.1.1',
                    value: '2.1.1.1'
                }]
            }]
        }
    ])
    console.log(array);
    return (
        <div>
            Tree show
            <Tree sourceData={array}/>
        </div>
    )
}
export default TreeExample
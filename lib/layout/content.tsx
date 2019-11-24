import React from 'react';
import {scopedClassMaker} from "../utils/class";
const sc = scopedClassMaker('gulu-layout')
const Content: React.FunctionComponent = () => {
    return (
        <div className={sc('content')}>content</div>
    )
};
export default Content;
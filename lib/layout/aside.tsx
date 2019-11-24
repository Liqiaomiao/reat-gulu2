import React from 'react';
import {scopedClassMaker} from "../utils/class";
const sc = scopedClassMaker('gulu-layout')
const Aside: React.FunctionComponent = () => {
    return (
        <div className={sc('aside')}>aside</div>
    )
}
export default Aside;
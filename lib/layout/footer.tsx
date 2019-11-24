import React from 'react';
import {scopedClassMaker} from "../utils/class";
const sc = scopedClassMaker('gulu-layout')
const Footer: React.FunctionComponent = () => {
    return (
        <div className={sc('footer')}>footer</div>
    )
};
export default Footer;
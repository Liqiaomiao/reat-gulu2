import React from 'react';
import {scopedClassMaker} from "../utils/class";
const sc = scopedClassMaker('gulu-layout')
const Header: React.FunctionComponent = () => {
    return (
        <div className={sc('header')}>header</div>
    )
};
export default Header;
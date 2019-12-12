import * as React from 'react'
import { HTMLAttributes } from 'react';
import './scroll.scss'
import scrollbarwidth from './scrollbar-width'
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll: React.FunctionComponent<Props> = (props) => {
    let { children, ...rest } = props
    return (
        <div className={'gui-scroll'} {...rest}>
            <div className={'gui-scroll-inner'} style={{ 'right': scrollbarwidth() }}>
                {children}
            </div>

        </div>
    )
}
export default Scroll

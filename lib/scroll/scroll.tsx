import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { HTMLAttributes } from 'react';
import './scroll.scss'
import scrollbarwidth from './scrollbar-width'
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll: React.FunctionComponent<Props> = (props) => {
    let { children, ...rest } = props
    let [barHeight, setBarHeight] = useState(0)
    let [barTop, setBarTop] = useState(0)
    const onscroll: React.UIEventHandler = (e) => {
        let currentTarget = e.currentTarget
        let scrollHeight = currentTarget.scrollHeight
        let viewHeight = currentTarget.getBoundingClientRect().height
        let scrollTop = currentTarget.scrollTop

        setBarTop(scrollTop * viewHeight / scrollHeight)
    }
    const containerRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        let { current } = containerRef
        let viewHeight = current!.getBoundingClientRect().height
        let scrollHeight = current!.scrollHeight
        setBarHeight(viewHeight * viewHeight / scrollHeight)
    }, [])
    return (
        <div className={'gui-scroll'} {...rest}>
            <div className={'gui-scroll-inner'}
                style={{ 'right': scrollbarwidth() }}
                ref={containerRef}
                onScroll={onscroll}
            >
                {children}
            </div>
            <div className='gui-scroll-track'>
                <div className='gui-scroll-bar' style={{ 'height': barHeight, 'transform': `translateY(${barTop}px)` }}></div>
            </div>
        </div>
    )
}
export default Scroll

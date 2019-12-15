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
    let [barTop, _setBarTop] = useState(0)
    const onscroll: React.UIEventHandler = (e) => {
        let { current } = containerRef
        let scrollHeight = current!.scrollHeight
        let viewHeight = current!.getBoundingClientRect().height
        let scrollTop = current!.scrollTop

        _setBarTop(scrollTop * viewHeight / scrollHeight)
    }
    const containerRef = useRef<HTMLDivElement>(null)
    const draggingRef = useRef<HTMLDivElement>(null)
    const tragging = useRef(false)
    const firstY = useRef(0)
    const firstBar = useRef(0)
    const setBarTop = (number: number) => {
        if (number < 0) {return;}
        const {current} = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) {return;}
        _setBarTop(number);
      };
    const handleOnMouseDown: React.MouseEventHandler = (e) => {
        tragging.current = true
        firstY.current = e.clientY
        firstBar.current = barTop
    }

    const handleOnMouseMove = (e:MouseEvent) => {
        if (tragging.current) {
            let delta = e.clientY - firstY.current
            setBarTop(firstBar.current+delta)
        }
    }
    const handleOnMouseUp: EventListener = () => {
        tragging.current = false
    }
    useEffect(() => { // mounted
        let { current } = containerRef
        let viewHeight = current!.getBoundingClientRect().height
        let scrollHeight = current!.scrollHeight
        setBarHeight(viewHeight * viewHeight / scrollHeight)
        document.addEventListener('mouseup', handleOnMouseUp)
        document.addEventListener('mousemove', handleOnMouseMove)
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
                <div className='gui-scroll-bar' style={{ 'height': barHeight, 'transform': `translateY(${barTop}px)` }}
                    ref={draggingRef}
                    onMouseDown={handleOnMouseDown}
                ></div>
            </div>
        </div>
    )
}
export default Scroll

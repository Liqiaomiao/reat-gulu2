import * as React from 'react'
import { useState, useEffect, useRef } from 'react'
import { HTMLAttributes } from 'react';
import './scroll.scss'
import scrollbarwidth from './scrollbar-width'
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Scroll: React.FunctionComponent<Props> = (props) => {
    const { children, ...rest } = props
    const [barHeight, setBarHeight] = useState(0)
    const [barTop, _setBarTop] = useState(0)
    const [barVisible, setBarVisible] = useState(false)
    const timeIdRef = useRef<number | null>(null)
    const onscroll: React.UIEventHandler = (e) => {
        let { current } = containerRef
        let scrollHeight = current!.scrollHeight
        let viewHeight = current!.getBoundingClientRect().height
        let scrollTop = current!.scrollTop
        setBarVisible(true)
        _setBarTop(scrollTop * viewHeight / scrollHeight)
        if (timeIdRef.current !== null) {
            window.clearTimeout(timeIdRef.current)
        }
        timeIdRef.current = window.setTimeout(() => {
            setBarVisible(false)
        }, 1000)
    }
    const containerRef = useRef<HTMLDivElement>(null)
    const draggingRef = useRef<HTMLDivElement>(null)
    const tragging = useRef(false)
    const firstY = useRef(0)
    const firstBarTop = useRef(0)

    const setBarTop = (number: number) => {
        if (number < 0) { return; }
        const { current } = containerRef;
        const scrollHeight = current!.scrollHeight;
        const viewHeight = current!.getBoundingClientRect().height;
        const maxBarTop = (scrollHeight - viewHeight) * viewHeight / scrollHeight;
        if (number > maxBarTop) { return; }
        _setBarTop(number);
    };
    const handleOnMouseDown: React.MouseEventHandler = (e) => {
        tragging.current = true
        firstY.current = e.clientY
        firstBarTop.current = barTop
    }

    const handleOnMouseMove = (e: MouseEvent) => {
        if (tragging.current) {
            let delta = e.clientY - firstY.current
            let newBarTop = firstBarTop.current + delta
            setBarTop(newBarTop)
            let { current } = containerRef
            let scrollHeight = current!.scrollHeight
            let viewHeight = current!.getBoundingClientRect().height
            containerRef.current!.scrollTop = newBarTop * scrollHeight / viewHeight
        }
    }
    const handleOnMouseUp: EventListener = () => {
        tragging.current = false
    }
    const handleOnSelect = (e: Event) => {
        if (tragging.current) {
            e.preventDefault()
        }
    }
    useEffect(() => { // mounted
        let { current } = containerRef
        let viewHeight = current!.getBoundingClientRect().height
        let scrollHeight = current!.scrollHeight
        setBarHeight(viewHeight * viewHeight / scrollHeight)
        document.addEventListener('mouseup', handleOnMouseUp)
        document.addEventListener('mousemove', handleOnMouseMove)
        document.addEventListener('selectstart', handleOnSelect)
        return () => { // destory
            document.removeEventListener('mouseup', handleOnMouseUp)
            document.removeEventListener('mousemove', handleOnMouseMove)
            document.removeEventListener('selectstart', handleOnSelect)
        }
    }, [])
    // pull down fresh
    const [translateY, _setTranslateY] = useState(0)
    const lastYRef = useRef(0)
    const pulling = useRef(false)
    const moveCount = useRef(0)
    const setTranslateY = (num: number) => {
        if (num > 0) {
            if (num > 150) { num = 150 }
            _setTranslateY(num)
        }
    }
    const ontouchstart: React.TouchEventHandler = (e) => {
        const scrollTop = containerRef.current!.scrollTop
        console.log(scrollTop)
        if (scrollTop !== 0) { return }
        pulling.current = true
        lastYRef.current = e.touches[0].clientY
    }
    const ontouchmove: React.TouchEventHandler = (e) => {
        const delta = e.touches[0].clientY - lastYRef.current
        moveCount.current++
        console.log(pulling.current)
        if (!pulling.current) { return }
        if (moveCount.current === 1 && delta < 0) {
            pulling.current = false
            return
        }
        setTranslateY(delta + translateY)
        lastYRef.current = e.touches[0].clientY
    }
    const ontouchend: React.TouchEventHandler = (e) => {
        _setTranslateY(0)
        pulling.current = false
    }
    return (
        <div className={'gui-scroll'} {...rest}>
            <div className={'gui-scroll-inner'}
                style={{ 'right': scrollbarwidth(), 'transform': `translateY(${translateY}px)` }}
                ref={containerRef}
                onScroll={onscroll}
                onTouchStart={ontouchstart}
                onTouchMove={ontouchmove}
                onTouchEnd={ontouchend}
            >
                {children}
            </div>
            {
                barVisible && <div className='gui-scroll-track'>
                    <div className='gui-scroll-bar' style={{ 'height': barHeight, 'transform': `translateY(${barTop}px)` }}
                        ref={draggingRef}
                        onMouseDown={handleOnMouseDown}
                    ></div>
                </div>
            }
            <div className="gui-scroll-pulling" style={{ height: translateY }}>
                {translateY === 150 ?
                    <span className="fui-scroll-pulling-text">释放手指即可更新</span> :
                    <span className="fui-scroll-pulling-icon">↓</span>}
            </div>
        </div>
    )
}
export default Scroll

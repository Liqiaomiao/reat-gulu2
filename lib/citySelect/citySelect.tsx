import React, {FC, useEffect, useState} from "react"
import ReactDOM from 'react-dom'
import pinyin from 'tiny-pinyin'
import './citySelect.scss'

interface Props {
    dataSource: string[]
}

const Dialog: FC<{ onClose: () => void }> = (props) => {
    return (
        ReactDOM.createPortal((
            <div className='gui-citySelect-dialog' onClick={props.onClose}>1234</div>
        ), document.body)
    )
}
const CurrentLocation: FC = () => {
    const [city, setCity] = useState<string>('加载中')
    useEffect(() => {
            const xhr = new XMLHttpRequest()
            xhr.open('get', 'http://ip-api.com/json/?lang=zh-CN')
            xhr.onload = () => {
                const string = xhr.responseText
                const obj = JSON.parse(string)
                const c = obj.city
                setCity(c)
            }
            xhr.onerror = () => {
                setCity('未知')
            }
            xhr.send();
        }
        , []
    )
    return (
        <div className='currentCity'>
            当前城市：{city}
        </div>
    )
}
const CitySelect: FC<Props> = (props) => {
    const [dialogVisible, setDialogVisible] = useState(false)
    const map:{[key:string]:string[]} = {}
    props.dataSource.map(city=>{
        const py = pinyin.convertToPinyin(city)
        const index = py[0]
        map[index] = map[index] || []
        map[index].push(city)
    })
    console.log(map)
    console.log(Object.keys(map));
    const onclick = () => {
        setDialogVisible(true)
    }
    const onClose = () => {
        setDialogVisible(false)
    }
    return (
        <div>
            <header>
                <span onClick={onclick}>选择城市</span>
                {dialogVisible && <Dialog onClose={onClose}></Dialog>}
            </header>
            <CurrentLocation/>
            {props.children}
        </div>
    )
}
export default CitySelect
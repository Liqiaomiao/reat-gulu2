import React, {FC, useContext, useEffect, useState} from "react"
import ReactDOM from 'react-dom'
import pinyin from 'tiny-pinyin'
import './citySelect.scss'

interface Props {
    dataSource: string[],
    onSelectCity: (city: string) => void
}

interface Context {
    map: { [key: string]: string[] },
    onSelectCity: (city: string) => void
}

const CitySelectContext = React.createContext<Context>({
    map: {}, onSelectCity: (city = '') => {
    }
})
const Dialog: FC<{ onClose: () => void }> = (props) => {
    const {map, onSelectCity} = useContext(CitySelectContext)
    const cityList = Object.entries(map).sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
    const scrollInToView = (cityKey: string) => {
        document.getElementById(cityKey)!.scrollIntoView(true)
    }
    return (
        ReactDOM.createPortal((
            <div className='gui-citySelect-dialog'>
                <header>
                    <span onClick={props.onClose}>&lt;</span>
                    <span>选择城市</span>
                </header>
                <CurrentLocation/>
                <h2>全部城市</h2>
                <ol className='gui-citySelect-index'>
                    {
                        cityList.map(city => (
                            <li onClick={(key) => scrollInToView(city[0])} key={city[0]}>{city[0]}</li>))
                    }
                </ol>
                <ul className='cityList'>
                    {
                        cityList.map(([itemkey, itemvalue]) => (
                            <li id={itemkey} key={itemkey} className="gui-citySelect-citySection">
                                <h4>
                                    {itemkey}
                                </h4>
                                {
                                    itemvalue.map(value => (
                                        <p className="gui-citySelect-cityName" key={value} onClick={() => {
                                            onSelectCity(value)
                                        }}>
                                            {value}
                                        </p>
                                    ))
                                }
                            </li>
                        ))
                    }
                </ul>

            </div>
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
    const map: Context['map'] = {}
    props.dataSource.map(city => {
        const py = pinyin.convertToPinyin(city)
        const index = py[0]
        map[index] = map[index] || []
        map[index].push(city)
    })
    const onclick = () => {
        setDialogVisible(true)
    }
    const onClose = () => {
        setDialogVisible(false)
    }
    return (
        <CitySelectContext.Provider value={{map, onSelectCity: props.onSelectCity}}>
            <div onClick={onclick}>{props.children}</div>
            {dialogVisible && <Dialog onClose={onClose}></Dialog>}

        </CitySelectContext.Provider>
    )
}
export default CitySelect
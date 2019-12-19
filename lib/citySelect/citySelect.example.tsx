import React, {FC} from "react";
import CitySelect from "./citySelect";
import {cities} from './cities'

const citySelectExample: FC = () => {
    return (
        <div>
            <h2>第一个例子</h2>
            <CitySelect dataSource={cities} onSelectCity={(data)=>{alert(`您选择了 ${data}`)}}>
                选择城市
            </CitySelect>
        </div>
    )
}
export default citySelectExample
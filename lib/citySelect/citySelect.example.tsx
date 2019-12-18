import React, {FC} from "react";
import CitySelect from "./citySelect";
import {cities} from './cities'

const citySelectExample: FC = () => {
    return (
        <div>
            <CitySelect dataSource={cities}>
            </CitySelect>
        </div>
    )
}
export default citySelectExample
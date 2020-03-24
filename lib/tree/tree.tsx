import * as React from "react";
import {scopedClassMaker} from "../helpers/classes";

interface SourceDataItem {
    text: string,
    value: string,
    children?: SourceDataItem[]
}

interface Props {
    sourceData: SourceDataItem[]
}

const scopedClassName = scopedClassMaker('fui-tree');
const sc = scopedClassName;
const renderItem = (item: SourceDataItem, level = 1) => {
    const classes = {
        [`level-${level}`]: true,
        'item': true
    }
    return <div key={item.value} className={sc(classes)}>
        {item.text}
        {item.children?.map(sub => {
            return renderItem(sub, level + 1)
        })}
    </div>
}
const Tree: React.FC<Props> = (prop) => {
    return (
        <div>
            {prop.sourceData?.map(sub => {
                return (
                    renderItem(sub, 1)
                )
            })}
        </div>
    )
}
export default Tree
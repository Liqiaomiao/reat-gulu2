import * as React from 'react'
import Scroll from './scroll'
const ScrollExample: React.FunctionComponent = () => {
    const onPullEnd = ():void=>{
        console.log('我知道你已经停止下拉更新')
    }

    return (
        <div style={{ 'width': '100%' }}>
            <Scroll style={{ height: '300px', border: '1px solid red' }} onPullEnd={onPullEnd}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
            </Scroll>
        </div>
    )
}
export default ScrollExample
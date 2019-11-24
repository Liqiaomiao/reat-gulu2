import React from "react";
import ReactDOM from "react-dom";
const rootElement = document.getElementById("root");
let _state=[];
let index = 0;
function myUseState(initialValue) {
    const currentIndex = index;
    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue: _state[currentIndex];

    function setState(newState) {
        console.log(_state,currentIndex)
        _state[currentIndex] = newState
        render()
    }
    index+=1
    return [_state[currentIndex],setState]
}
const render = ()=>{
    index = 0;
    ReactDOM.render(<App/>,rootElement)
}
function App(){
    const [n,setN] = myUseState(0)
    const [m,setM] = myUseState(2)
    return (
        <div className="App">
            <p>{n}</p>
            <p>{m}</p>
            <button onClick={() => setN(n + 1)}>click</button>
            <button onClick={() => setM(m + 1)}>click</button>
            <button onClick={()=>setTimeout(()=>{console.log(n)},1000)}></button>
        </div>
    )
}
ReactDOM.render(<App/>,rootElement)
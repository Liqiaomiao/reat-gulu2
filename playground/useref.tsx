import React,{useRef,useState} from "react"
import ReactDOM from 'react-dom'
const rootElement = document.getElementById("root");
function App() {
    let nRef = useRef(0);
    let log = ()=>setTimeout(()=>console.log(nRef.current),1000)
    let update = useState(-1)[1]
   return (
       <div>
           <p>{nRef.current}</p>
           <button onClick={()=>{nRef.current++;update(nRef.current)}}>+1</button>
           <button onClick={log}>log</button>
       </div>
   )
}
ReactDOM.render(<App/>,rootElement)
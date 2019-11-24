import React,{useState, useEffect} from "react"
interface Props {
    message?: string;
}
const App:React.FunctionComponent<Props> = props => {
    const [n, setN] = useState(1)
    const x = () =>{
            setN(n+1)
        }
    useEffect(()=>{
        console.log(n)
    },[n])
    return (
        <div>
            <p>{n}</p>
            <button onClick={x}>click</button>
           <p>{(props.message as string).split(' ')}</p>
           <p>{props.message!.split(' ')}</p>
        </div>
    )
}
App.defaultProps = {
    message:'hell world'
}
export default App
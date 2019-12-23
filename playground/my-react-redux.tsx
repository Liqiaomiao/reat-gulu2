import  React from 'react'
import  ReactDOM from 'react-dom'
import { createStore } from "redux";

import {Provider} from 'react-redux';
import Mycomp from "./mycomp";
const div = document.createElement('div')
document.body.append(div)
class App extends React.Component{
    constructor(props:{n:number, add:()=>void}){
        super(props)
    }
    render(){
        return (
            <div>
                <Mycomp/>
            </div>
        )
    }
}


const initState={
    n:0
}

const reducer = (state=initState,action:{type:string,payload:any})=>{
    switch (action.type) {
        case 'add':
            return {
                n:state.n+1
            } ;
        default:
            return state;
    }

}
const store=createStore(reducer)

ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), div)
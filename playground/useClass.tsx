import React from 'react'

interface Props {
    message: string
}
interface State {
    n: number,
    firstName: string,
    lastName: string
}

class App extends React.Component<Props, State>{
    static defaultProps = {
        message: "default message"
    };
    static  displayName = "useClass";
    constructor(props:any){
        super(props);
        this.state={
            n: 1,
            firstName: 'Liu',
            lastName: 'Andy'
        }
    }
    x = ()=>{
        this.setState({
            n: this.state.n + 1
        })
    };
    get name(){
        return this.state.firstName + " " +  this.state.lastName
    }
    render() {
        return (
            <div>
                <div>{this.name}</div>
                <div>{this.state.n}</div>
                <button onClick={this.x}>+1</button>
            </div>
            )
    }
}
export default  App
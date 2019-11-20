import React from "react";
interface  Props {
    message: string;
}
interface State {
    n?:number,
    firstName: string;
    lastName: string;
}
class  UseClass2 extends  React.Component<Props,State>{
    static defaultProps={
        message:'world'
    }
    static displayName= 'Lisa'
    constructor(props:Props) {
        super(props);
        this.state={
            n:1,
            firstName: 'liu',
            lastName: 'andy'
        }
    }
    x(){
        this.setState({
            n:2
        })
    }
    get name(){
        return this.state.lastName +' '+ this.state.firstName
    }
    set name(newvalue){
        let [firstName, lastName] =  newvalue.split(' ')
        this.setState({
            firstName,
            lastName
        })
    }
    render(){
        return (
            <div>
                <input type="text" value={this.state.firstName} onChange={e => this.setState({firstName:e.target.value}) }/>
                <input type="text" value={this.state.lastName} onChange={e => this.setState({lastName:e.target.value}) }/>
                <p>{this.props.message}</p>
                <p>计算属性 通过get实现 得到的名字： {this.name}</p>
                <button onClick={this.x.bind(this)} >{this.state.n}</button>
                <button onClick={e=>this.name = 'lisa li'}>change nane</button>
            </div>
        )
    }

}
export default UseClass2
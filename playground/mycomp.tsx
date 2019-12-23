import  React from 'react'
import {connect} from 'react-redux';
type Props ={
    n:number,
    add:()=>void
}

class Mycomp extends React.Component<Props>{
    constructor(props:Props){
        super(props)
        console.log(this.props);
    }
    render(){
        return (
            <div>
                <span>{this.props.n}</span>
                <button onClick={()=>{this.props.add()}}>+1</button>
            </div>
        )
    }
}

function mapStateToProps(state:{n:number}) {
    return {
        n: state.n
    }
}


const mapDispatchToProps = (dispatch:(param:{type:string,payload:number})=>void) => {
    return {
       add:()=> dispatch({
           type: 'add',
           payload: 1
       })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mycomp)
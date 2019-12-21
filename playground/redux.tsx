import * as React from "react";
import * as ReactDOM from "react-dom";
import {createStore} from 'redux'

const div = document.createElement('div')
document.body.append(div)


function counter(state = {money: {amount: 1000}}, action: { type: any, payload: number }) {
    switch (action.type) {
        case '我想花钱':
            return {

                money: {
                    amount: state.money.amount - action.payload
                }
            }
        default:
            return state;
    }
}


interface State {

    money: {
        amount: number
    }
}

const store = createStore(counter)

class App extends React.Component<State> {


    constructor(props: State) {
        super(props)
    }


    render() {
        return (
            <div className="root">
                <BigPapa money={this.props.money}/>
            </div>
        )
    }

}

class BigPapa extends React.Component<State> {
    constructor(props: State) {
        super(props)

    }

    render() {
        return (
            <div className="papa"> 大爸 {this.props.money.amount}
                <Son1 money={this.props.money}/>
                <Son2 money={this.props.money}/>
            </div>
        )
    }

}


class Son1 extends React.Component<State> {
    constructor(props: State) {
        super(props)

    }

    render() {
        return (
            <div className="son"> 儿子1 {this.props.money.amount}</div>
        )
    }

}

class Son2 extends React.Component<State> {
    constructor(props: State) {
        super(props)

    }

    x() {
        // action
        store.dispatch({type: '我想花钱', payload: 100})

    }

    render() {
        return (
            <div className="son"> 儿子2 {this.props.money.amount}
                <button onClick={() => this.x()}>消费</button>
            </div>
        )
    }

}

function render() {
    ReactDOM.render(<App money={store.getState()!.money}/>, div)
}

store.subscribe(function () {
    render()
})
render()
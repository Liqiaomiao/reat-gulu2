import * as React from "react";
import * as ReactDOM from 'react-dom'
import './eventHub.scss'

const rootElement = document.createElement("div");
document.body.append(rootElement)
// 数据
const money = {
    amount: 100000
}

const store = {
    money: money
}

interface State {
    store: {
        money: {
            amount: number
        }
    }
}

type Fn = (data: number) => void
// eventHub
const fnLists: { [k: string]: Fn[] } = {}
const eventHub = {
    trigger(eventName: string, data: number) {
        let fnList = fnLists[eventName]
        if (!fnList) {
            return
        }
        for (let i = 0; i < fnList.length; i++) {
            fnList[i](data)
        }
    },
    on(eventName: string, fn: Fn) {
        if (!fnLists[eventName]) {
            fnLists[eventName] = []
        }
        fnLists[eventName].push(fn)
    }
}

const x = {
    init() {
        eventHub.on('我想花钱', function (data) {  // subscribe
            store.money.amount -= data  // reducer
            render()
        })
    }
}
x.init()

class App extends React.Component<{}, State> {


    constructor(props: {}) {
        super(props)
        this.state = {
            store: store
        }
    }


    render() {
        return (
            <div className="root">
                <BigPapa store={this.state.store}/>
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
            <div className="papa"> 大爸 {this.props.store.money.amount}
                <Son1 store={this.props.store}/>
                <Son2 store={this.props.store}/>
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
            <div className="son"> 儿子1 {this.props.store.money.amount}</div>
        )
    }

}

class Son2 extends React.Component<State> {
    constructor(props: State) {
        super(props)

    }

    x() {
        // action
        eventHub.trigger('我想花钱' /*action type*/, 100) // payload

    }

    render() {
        return (
            <div className="son"> 儿子2 {this.props.store.money.amount}
                <button onClick={() => this.x()}>消费</button>
            </div>
        )
    }

}


function render() {
    ReactDOM.render(<App/>, rootElement)
}

render()

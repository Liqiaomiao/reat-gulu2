import React from 'react'
import ReactDom from 'react-dom'
import {HashRouter as Router, Route, Link} from "react-router-dom";
import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button/button.example'
import  App  from './playground/useClass'
import  {default as Lisa}  from './playground/useFun'
ReactDom.render((
    <Router>
        <div>
            <header>
                <div className="logo">
                    LiUI
                </div>
            </header>
            <div>
                <aside>
                    <h2>组件</h2>
                    <ul>
                        <li>
                            <Link to='/icon'>Icon</Link>
                        </li>
                        <li>
                            <Link to='/button'>Button</Link>
                        </li>
                        <li>
                            <Link to='/useclass'>useclass</Link>
                        </li>
                        <li>
                            <Link to='/useFun'>useFun</Link>
                        </li>
                    </ul>
                </aside>
                <main>
                    <Route path="/icon" component={IconExample}/>
                    <Route path="/button" component={ButtonExample}/>
                    <Route path="/useclass" component={App}/>
                    <Route path="/useFun" component={Lisa}/>
                </main>
            </div>
        </div>
    </Router>
    ), document.querySelector('#root')
);
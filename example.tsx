import * as React from 'react'
import * as ReactDom from 'react-dom'
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconExample from './lib/icon/icon.example'
import ButtonExample from './lib/button/button.example'
import Dialog from "./lib/dialog/dialog.example"
import LayoutExample from './lib/layout/layout.example'
import { Aside, Header, Layout, Content } from "./lib/layout/layout"
import './example.scss'
import FormExample from "./lib/form/form.example";
import ScrollEample from './lib/scroll/scroll.example'
const logo = require('./logo012.png')
ReactDom.render((
    <Router>
        <Layout className={'site-page'}>
            <Header className='site-header'>
                <div className="logo">
                    <img src={logo.default} alt="logo" height='60' />
                </div>
            </Header>
            <Layout>
                <Aside className='site-aside'>
                    <h2>Gui</h2>
                    <ul>
                        <li>
                            <NavLink to='/icon'>Icon</NavLink>
                        </li>
                        <li>
                            <NavLink to='/button'>Button</NavLink>
                        </li>
                        <li>
                            <NavLink to='/dialog'>Dialog</NavLink>
                        </li>
                        <li>
                            <NavLink to='/layout'>Layout</NavLink>
                        </li>
                        <li>
                            <NavLink to="/form">Form</NavLink>
                        </li>
                        <li>
                            <NavLink to="/scroll">Scroll</NavLink>
                        </li>
                    </ul>
                </Aside>
                <Content className='site-content'>
                    <main>
                        <Route path="/icon" component={IconExample} />
                        <Route path="/button" component={ButtonExample} />
                        <Route path="/dialog" component={Dialog} />
                        <Route path="/layout" component={LayoutExample} />
                        <Route path="/form" component={FormExample} />
                        <Route path='/scroll' component={ScrollEample} />
                    </main>
                </Content>
            </Layout>
        </Layout>
    </Router>
), document.querySelector('#root')
);
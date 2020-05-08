import React, { Component } from 'react';
import { Login } from './Login'
import './App.css';
import { Main } from './Main';
import { proxy } from './proxy';
export default class App extends Component {
    render() {
        return (
            <div className="app">
                {(proxy.inbox == null) ? <Login /> : <Main />}
            </div>
        );
    }

    componentDidMount() {
        proxy.addEventListener("login", () => this.forceUpdate(), this);
    }

    componentWillUnmount() {
        proxy.removeAllEventListener(this);
    }

}

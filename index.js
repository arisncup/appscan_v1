/**
 * @format
 */

import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import App from './App';
import { name as appName } from './app.json';
import Login from './src/containers/pages/Login';
import Splash from './src/containers/pages/Splash';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'Login' })
        }, 5000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <Login />
        return mainScreen
    }
}

AppRegistry.registerComponent(appName, () => App);

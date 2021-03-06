// @flow

import React, { Component } from 'react';
import {
    AppRegistry,
    NavigatorIOS
} from 'react-native';

import Login from './components/Login';
import styles from './styles/index';

export default class Wildhacks2017QRScanner extends Component {

    initialComponent = Login

    render() {
        return (
            <NavigatorIOS
                style = {styles.container}
                initialRoute={{
                    title: 'QR Scanner',
                    component: this.initialComponent
                }}
            />
        );
    }
}

AppRegistry.registerComponent('Wildhacks2017QRScanner', () => Wildhacks2017QRScanner);

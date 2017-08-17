/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class ReactNative_View extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            <View>
                <Text>Hello world！</Text>
               <Image source ={pic} style = {{width: 193, height: 110}}/>
            </View>
        );
    }
}


AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

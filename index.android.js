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

export default class Greeting extends Component {
    render() {
        let pic = {
            uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
        };
        return (
            // 多组件可以用View包裹，单组件则直接显示即可！
            <View>
                <Text>Hello world！</Text>
                <Image source={pic} style={{width: 193, height: 110}}/>
                <Text>Hello {this.props.name}!</Text>
            </View>
        );
    }
}
// 自定义的组件也可以使用props,
// 通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Greeting name='Rexxar'/>
                <Greeting name='Jaina'/>
                <Greeting name='Valeera'/>
            </View>
        )
    }
}


AppRegistry.registerComponent('ReactNative_View', () => LotsOfGreetings);

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

/**
 * 自定义的组件也可以使用props,
 * 通过在不同的场景使用不同的属性定制，可以尽量提高自定义组件的复用范畴。
 */
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

class Blink extends Component {

    // 在constructor中初始化state
    constructor(props) {
        super(props);
        this.state = {showText: true};

        // 每1000毫秒对showText状态做一次取反操作
        setInterval(() => {
            this.setState(previousState => {
                return {showText: !previousState.showText};
            });
        }, 1000);
    }

    render() {
        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : '';
        return (<Text>{display}</Text>)
    }

}

/**
 * 2、 制作一段不停闪烁的文字
 */

class BlinkApp extends Component {
    render() {
        return (
            <View>
                <Blink text='I love to blink'/>
                <Blink text='Yes blinking is so great'/>
                <Blink text='Why did they ever take this out of HTML'/>
                <Blink text='Look at me look at me look at me'/>
            </View>
        );
    }
}


AppRegistry.registerComponent('ReactNative_View', () => BlinkApp);

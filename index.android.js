/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Button
 * 做一个按钮
 *
 * 小技巧：TouchableOpacity按住tab键自动展开！
 * 按钮自定义
 * CTRL+D 自动复制一行
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Button from './src/component/Button'

export default class ReactNative_View extends Component {


    constructor(props) {
        super(props);
        this.state = {status: 1};
    }

    customPress = () => {
        // 按钮的自定义方法引用
        alert('按钮被点击,当前状态是：' + this.state.status);
    }

    render() {
        return (
            <View style={styles.container}>
                {/* props属性 同事可以添加别的标签*/}
               <Button text = "添加" beijing ="red" date = "2017/8/17" object = {{a:'b'}} dianji ={() =>{alert('你点击了添加！')}}/>
               <Button text = "删除" beijing = "gray" dianji ={() =>{alert('你点击了删除！')}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        height: 40,
        width: 100,
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

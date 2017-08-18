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
 *
 * 模拟网络请求：有2种方法：
 * 1、refs引用按钮方法
 *  <Button  ref = "button" text = "提交"  onPress = {this.fetchData}/>
 *   fetchData = () => {
        // 禁用按钮
        this.refs.button.disable();
        // alert('正在获取数据');// 这里是dialog效果不好，采用定时器可以的！
        this.timer = setTimeout(() =>{
            // 获取完数据后启用按钮
            this.refs.button.enable();
        }, 3000);

    };
 *  2、引用button,用回调方法
 *   this.disable();
 *   onPress(this.enable);  // 异步执行
 *   fetchData = (enableCallBack) => {
        console.log(3);
        // alert('正在获取数据');// 这里是dialog效果不好，采用定时器可以的！
        this.timer = setTimeout(() =>{
            enableCallBack();
        }, 3000);

    };
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


// 回调方法enableCallBack
    fetchData = (enableCallBack) => {
        console.log(3);
        // alert('正在获取数据');// 这里是dialog效果不好，采用定时器可以的！
        this.timer = setTimeout(() =>{
            enableCallBack();
        }, 3000);

    };
    componentWillUnmount() {
        // 请注意Un"m"ount的m是小写

        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
                {/* props属性  ref相当于html里面的id 标记引用组件等 同时可以添加别的标签   dianji = {this.fetchData()}*/}
               <Button   text = "提交"  onPress = {this.fetchData}/>
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

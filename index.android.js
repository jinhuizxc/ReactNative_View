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
 * 网络请求拉取数据
 * 补充：网络请求如果不行可以尝试
 * body:key1=value1&key2=value2,然后去掉
 *  headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
 因为用的已经不是json格式了！
 title为空的判断：
 1、{this.state.title ? this.state.title : null}
 2、加构造器初始化状态(推荐)：
 constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title: '',
        }
    }


 *
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
        // 初始状态
        this.state = {
            title: '',
        }
    }

// 回调方法enableCallBack
    fetchData = (enableCallBack) => {
        fetch('http://bbs.reactnative.cn/api/category/3', {
           //method: 'POST',  // get:用户读取数据 post:用户可以进行修改上传！方法默认是get
           //  headers: {
           //      'Accept': 'application/json',
           //      'Content-Type': 'application/json',
           //  },
           //  body: JSON.stringify({
           //      firstParam: 'yourValue',
           //      secondParam: 'yourOtherValue',
           //  })
        }).then((response) => response.json())
            // .then((responseJson) => {
            //     return responseJson.movies;
            .then((jsondata) => {
            this.setState({
                title: jsondata.topics[0].title,
            })
            })
            .catch((error) => {
                console.error(error);
            });


    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                   RN中文网头条文章：
                </Text>
                <Text style={styles.instructions}>
                    {this.state.title ? this.state.title : null}
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

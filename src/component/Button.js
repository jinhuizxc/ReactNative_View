/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * Button
 * 做一个按钮
 *
 * 小技巧：控件TouchableOpacity按住tab键自动展开！
 * TouchableHighlight
 * 按钮自定义
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TouchableHighlight,
} from 'react-native';

export default class Button extends Component {


    constructor(props) {
        super(props);
        this.state = {status: 1};
    }

    customPress = () => {
        // 按钮的自定义方法引用
        // alert('按钮被点击,当前状态是：' + this.state.status);
        const {dianji} = this.props;
        dianji();
    }

    render() {
        // 解构 const不可更改的操作
        //  写法：const text = this.props.text;
        const {text, beijing} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button,{backgroundColor: beijing}]}
                onPress = {this.customPress}>
                    <Text style={styles.buttonText}>{this.props.text}</Text>
                </TouchableOpacity>

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

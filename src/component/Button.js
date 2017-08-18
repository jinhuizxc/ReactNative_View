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
 *
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
        this.state = {
            disabled: false,
        }
    }

    onPress = () => {
        console.log(1);
        const {onPress} = this.props;
        this.disable();
        onPress(this.enable);  // 异步执行
        // this.enable();
    };
    enable = () =>{
        console.log(4);
        this.setState({
            disabled: false,
        })
    };
    disable = () =>{
        console.log(2);
        this.setState({
            disabled: true,
        })
    };

    render() {
        // 解构 const不可更改的操作
        //  写法：const text = this.props.text;
        //  this.state.disabled && styles.disabled ---当前者样式成立返回后面的样式
        const {text} = this.props;
        return (
                <TouchableOpacity
                    disabled = {this.state.disabled}
                    style={[styles.button, this.state.disabled && styles.disabled]}
                    onPress={this.onPress}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    disabled:{
        backgroundColor: 'gray',
    },
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

});

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
    ActivityIndicator,
} from 'react-native';

export default class Button extends Component {


    constructor(props) {
        super(props);
        this.state = {
            disabled: false,
            animating: true, // 初始设为显示加载动画
        }
    }

    // 按钮响应方法，切换显示与隐藏
    showOrHide() {
        if (this.state.animating) {
            this.setState({
                animating: false
            });
        } else {
            this.setState({
                animating: true
            });
        }
    }

    onPress = () => {
        const {onPress} = this.props;
        this.disable();
        this.showOrHide();
        onPress(this.enable);  // 异步执行
        // this.enable();
    };
    enable = () =>{
        this.setState({
            disabled: false,
        })
    };
    disable = () =>{
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
            <View>
                <TouchableOpacity
                    disabled = {this.state.disabled}
                    style={[styles.button, this.state.disabled && styles.disabled]}
                    onPress={this.onPress}>
                    <Text style={styles.buttonText}>{text}</Text>
                </TouchableOpacity>
                <ActivityIndicator
                    animating={this.state.animating}
                    style={[styles.centering, {height: 80}]}
                    size="large" />
            </View>
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/**
 * ActivityIndicator
 * 显示一个圆形的loading提示符号。
 */

// import React, { Component } from 'react';
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View,
//     ActivityIndicator,
//     TouchableOpacity
// } from 'react-native';
//
// class RNActivityIndicatorDemo extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {// 初始设为显示加载动画
//             animating: true,
//         };
//     }
//
//     // 按钮响应方法，切换显示与隐藏
//     showOrHide() {
//         if (this.state.animating) {
//             this.setState({
//                 animating: false
//             });
//         } else {
//             this.setState({
//                 animating: true
//             });
//         }
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 {/* 切换显示或隐藏的按钮 */}
//                 <TouchableOpacity underlayColor="#fff" style={styles.btn} onPress={
//                     this.showOrHide.bind(this)}>
//                     <Text style={{color:'#fff', fontSize: 20}}>显示/隐藏</Text>
//                 </TouchableOpacity>
//                 {/* 小号的指示器 */}
//                 <ActivityIndicator
//                     animating={this.state.animating}
//                     style={[styles.centering, {height: 80}]}
//                     size="small" />
//                 {/* 大号的指示器 */}
//                 <ActivityIndicator
//                     animating={this.state.animating}
//                     style={[styles.centering, {height: 80}]}
//                     size="large" />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     centering: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         padding: 8,
//     },
//     btn:{
//         marginTop:10,
//         width:150,
//         height:35,
//         backgroundColor:'#3BC1FF',
//         justifyContent:'center',
//         alignItems:'center',
//         borderRadius:4,
//     },
// });


'use strict';

const React = require('react');
const ReactNative = require('react-native');
const {
    ActivityIndicator,
    StyleSheet,
    View,
    AppRegistry,
} = ReactNative;
const TimerMixin = require('react-timer-mixin');

const ToggleAnimatingActivityIndicator = React.createClass({
    mixins: [TimerMixin],

    getInitialState() {
        return {
            animating: true,
        };
    },

    setToggleTimeout() {
        this.setTimeout(() => {
            this.setState({animating: !this.state.animating});
            this.setToggleTimeout();
        }, 2000);
    },

    componentDidMount() {
        this.setToggleTimeout();
    },

    render() {
        return (
            <ActivityIndicator
                animating={this.state.animating}
                style={[styles.centering, {height: 80}]}
                size="large"
            />
        );
    }
});

exports.displayName = (undefined: ?string);
exports.framework = 'React';
exports.title = '<ActivityIndicator>';
exports.description = 'Animated loading indicators.';

exports.examples = [
    {
        title: 'Default (small, white)',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"
                />
            );
        }
    },
    {
        title: 'Gray',
        render() {
            return (
                <View>
                    <ActivityIndicator
                        style={[styles.centering]}
                    />
                    <ActivityIndicator
                        style={[styles.centering, {backgroundColor: '#eeeeee'}]}
                    />
                </View>
            );
        }
    },
    {
        title: 'Custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator color="#0000ff"/>
                    <ActivityIndicator color="#aa00aa"/>
                    <ActivityIndicator color="#aa3300"/>
                    <ActivityIndicator color="#00aa00"/>
                </View>
            );
        }
    },
    {
        title: 'Large',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, styles.gray]}
                    color="white"
                    size="large"
                />
            );
        }
    },
    {
        title: 'Large, custom colors',
        render() {
            return (
                <View style={styles.horizontal}>
                    <ActivityIndicator
                        size="large"
                        color="#0000ff"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa00aa"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#aa3300"
                    />
                    <ActivityIndicator
                        size="large"
                        color="#00aa00"
                    />
                </View>
            );
        }
    },
    {
        title: 'Start/stop',
        render() {
            return <ToggleAnimatingActivityIndicator/>;
        }
    },
    {
        title: 'Custom size',
        render() {
            return (
                <ActivityIndicator
                    style={[styles.centering, {transform: [{scale: 1.5}]}]}
                    size="large"
                />
            );
        }
    },
];

const styles = StyleSheet.create({
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    gray: {
        backgroundColor: '#cccccc',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 8,
    },
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ToggleAnimatingActivityIndicator);

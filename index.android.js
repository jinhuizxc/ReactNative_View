/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
} from 'react-native';
import Index from './pages/Index';
import {StackNavigator} from 'react-navigation'

// export const ReactNative_View = StackNavigator({
//
//     Home: {
//         screen: Index,
//         navigationOptions: {
//             headerTitle: '首页',
//         },
//     },
// },{
//     initialRouteName: 'Home',
// });
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//     }
// });


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => Index);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
} from 'react-native';

import CustomViewPager from './CustomViewPager';
import ViewPagerInAndroid from './ViewPagerInAndroid';

class wangyi extends Component {

    render(){
        return (
            <ViewPagerInAndroid/>
        );
    }
}

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => wangyi);

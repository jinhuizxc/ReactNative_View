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
    Image
} from 'react-native';

/**
 * 增加一个带边框的矩形，红色边框
 *
 * (1)Flexbox布局,目前支持的属性:
 * flexDirection、flexWrap、justifyContent、alignItems、alignSelf、flex
 * (2) flexDirection
 * flexDirection在React-Native中只有两个属性，一个是row(横向伸缩)和column(纵向伸缩)。
 * (3)alignSelf:对齐方式
 * alignSelf的对齐方式主要有四种：flex-start、 flex-end、 center、 auto、 stretch
 * （4）水平垂直居中
 * alignItems是alignSelf的变种，跟alignSelf的功能类似，可用于水平居中；justifyContent用于垂直居中，属性较多，可以了解下
 */

var ReactNative_View = React.createClass({
    render: function () {
        return (
            <View style={styles.style_0}>
                <View style={styles.view}><Text>自由放置</Text></View>
                <View style={[styles.view, styles.center]}><Text style ={styles.center}>居中放置</Text></View>
                <View style={[styles.view, styles.left]}><Text>居左放置</Text></View>
                <View style={[styles.view, styles.right]}><Text style ={styles.right}>居右放置</Text></View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    style_0: {
        flex: 1,
        borderColor: 'red',
        borderWidth: 0.5,
        justifyContent:'center'
    },
    view: {
        borderWidth: 5,
        borderColor: 'blue',
        width: 100,
        height: 40
    },
    center: {
        alignSelf: 'center',
        borderColor: 'red',
    },
    left: {
        alignSelf: 'flex-start'
    },
    right: {
        alignSelf: 'flex-end'
    }

});


// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

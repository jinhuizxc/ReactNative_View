/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

/**
 * 增加一个带边框的矩形，红色边框
 */

var ReactNative_View = React.createClass({
    render: function() {
        return (
                <View style={styles.style_0}>
                    <View style={styles.style_1}>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                    </View>
                    <View style={[styles.style_1,{flexDirection: 'column'}]}>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                        <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
                    </View>
                    <View style={{flex:10, height:40, borderWidth: 1, borderColor: 'red',}}>
                        <Text style={{marginTop:40, fontSize:25}}>1／2高</Text>
                    </View>
                </View>
        );
    }
});

var styles = StyleSheet.create({
    style_0:{
        flex:1,
    },
    style_1:{
        flexDirection: 'row',
        flex: 5,
        height:40,
        borderWidth: 1,
        borderColor: 'red',
    },

});



// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

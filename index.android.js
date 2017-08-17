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
    Image,
} from 'react-native';

class LotsOfStyles extends Component {
    render() {
        return (
            <View>
                <Text style = {styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style = {[styles.red, styles.bigblue]}>red, then bigblue</Text>
            </View>
        )
    }
}


// 定义样式
// 常见的做法是按顺序声明和使用style属性，
// 以借鉴CSS中的“层叠”做法（即后声明的属性会覆盖先声明的同名属性）。
const styles = StyleSheet.create({

    bigblue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red:{
        color:'red',
    }
})

AppRegistry.registerComponent('ReactNative_View', () => LotsOfStyles);

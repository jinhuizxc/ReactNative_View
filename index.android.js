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

/**
 * 1、指定宽高
 * 最简单的给组件设定尺寸的方式就是在样式中指定固定的width和height。
 * React Native中的尺寸都是无单位的，表示的是与设备像素密度无关的逻辑像素点。
 * 2、弹性（Flex）宽高
 * 使用flex:1来指定某个组件扩张以撑满所有剩余的空间
 * 这些并列的子组件的flex值不一样，则谁的值更大，
 * 谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）。
 *
 */
class LotsOfStyles extends Component {
    render() {
        return (

            <View style={{flex: 1}}>
                <Text style = {styles.red}>just red</Text>
                <Text style={styles.bigblue}>just bigblue</Text>
                <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
                <Text style = {[styles.red, styles.bigblue]}>red, then bigblue</Text>

                <View style={{flex: 2}}>
                    <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                        <Text style = {styles.red}>just red</Text>
                    </View>
                    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>

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

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
 * 谁占据剩余空间的比例就更大（即占据剩余空间的比等于并列组件间flex值的比）
 * 3、 使用Flexbox布局
 * React Native中的Flexbox的工作原理和web上的CSS基本一致，当然也存在少许差异。
 * 首先是默认值不同：flexDirection的默认值是column而不是row，而flex也只能指定一个数字值。
 * Flex Direction
 * 在组件的style中指定flexDirection可以决定布局的主轴。
 * 子元素是应该沿着水平轴(row)方向排列，
 * 还是沿着竖直轴(column)方向排列呢？默认值是竖直轴(column)方向。
 * Justify Content
 * 在组件的style中指定justifyContent可以决定其子元素沿着主轴的排列方式。
 * 子元素是应该靠近主轴的起始端还是末尾段分布呢？亦或应该均匀分布？
 * 对应的这些可选项有：flex-start、center、flex-end、space-around以及space-between。
 * Align Items
 * 在组件的style中指定alignItems
 * 可以决定其子元素沿着次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式。
 * 子元素是应该靠近次轴的起始端还是末尾段分布呢？亦或应该均匀分布？
 * 对应的这些可选项有：flex-start、center、flex-end以及stretch。
 *
 */
class LotsOfStyles extends Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}


AppRegistry.registerComponent('ReactNative_View', () => LotsOfStyles);

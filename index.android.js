/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    NativeModules,
    LayoutAnimation,
    Text,
    TouchableOpacity,
    StyleSheet,
    View,
    AccessibilityInfo,
} from 'react-native';

/**
 * 动画
 * React Native提供了两个互补的动画系统：
 * 用于全局的布局动画LayoutAnimation，和用于创建更精细的交互控制的动画Animated。
 * LayoutAnimation
 LayoutAnimation允许你在全局范围内创建和更新动画，这些动画会在下一次渲染或布局周期运行。
 它常用来更新flexbox布局，因为它可以无需测量或者计算特定属性就能直接产生动画。尤其是当布局变化可能影响到父节点（譬如“查看更多”展开动画既增加父节点的尺寸又会将位于本行之下的所有行向下推动）时，如果不使用LayoutAnimation，可能就需要显式声明组件的坐标，才能使得所有受影响的组件能够同步运行动画。
 注意尽管LayoutAnimation非常强大且有用，但它对动画本身的控制没有Animated或者其它动画库那样方便，
 所以如果你使用LayoutAnimation无法实现一个效果，那可能还是要考虑其他的方案。
 */

class ScreenReaderStatusExample extends React.Component {
    state = {
        screenReaderEnabled: false,
    }

    componentDidMount() {
        AccessibilityInfo.addEventListener(
            'change',
            this._handleScreenReaderToggled
        );
        AccessibilityInfo.fetch().done((isEnabled) => {
            this.setState({
                screenReaderEnabled: isEnabled
            });
        });
    }

    componentWillUnmount() {
        AccessibilityInfo.removeEventListener(
            'change',
            this._handleScreenReaderToggled
        );
    }

    _handleScreenReaderToggled = (isEnabled) => {
        this.setState({
            screenReaderEnabled: isEnabled,
        });
    }

    render() {
        return (
            <View>
                <Text>
                    The screen reader is {this.state.screenReaderEnabled ? 'enabled' : 'disabled'}.
                </Text>
            </View>
        );
    }
}

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ScreenReaderStatusExample);

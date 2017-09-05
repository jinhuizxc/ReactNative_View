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
    Button,
    Alert,
} from 'react-native';
/**
 * DatePickerIOS
 * 使用DatePickerIOS来在iOS平台上渲染一个日期/时间选择器。
 * 这是一个受约束的(Controlled)组件，所以你必须监听onDateChange回调函数并且及时更新date属性来使得组件更新，
 * 否则用户的修改会立刻被撤销来确保当前显示值和props.date一致。
 * 属性:
 * date Date
 * 当前被选中的日期。
 * maximumDate Date
 * 可选的最大日期。限制可选的日期/时间范围。
 * minimumDate Date
 * 可选的最小日期。限制可选的日期/时间范围。
 * minuteInterval enum(1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30)
 * 可选的最小的分钟单位。
 * mode enum('date', 'time', 'datetime')
 * 选择器模式
 * onDateChange function
 * 当用户修改日期或时间时调用此回调函数。
 * 唯一的参数是一个日期对象，表示新的日期和时间。
 * timeZoneOffsetInMinutes number
 * 时区差，单位是分钟。
 * 默认情况下，选择器会选择设备的默认时区。通过此参数，可以指定一个时区。举个例子，要使用北京时间（东八区），可以传递8 * 60。
 */

export default class ReactNative_View extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={this.onPressLearnMore}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }

    onPressLearnMore() {

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

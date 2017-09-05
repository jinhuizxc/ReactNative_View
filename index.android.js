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
    DrawerLayoutAndroid,
} from 'react-native';
/**
 * DrawerLayoutAndroid
 *封装了平台DrawerLayout（仅限安卓平台）的React组件。
 * 抽屉（通常用于导航切换）是通过renderNavigationView方法渲染的，
 * 并且DrawerLayoutAndroid的直接子视图会成为主视图（用于放置你的内容）。
 * 导航视图一开始在屏幕上并不可见，
 * 不过可以从drawerPosition指定的窗口侧面拖拽出来，并且抽屉的宽度可以使用drawerWidth属性来指定。
 */

class ReactNative_View extends Component {
    render() {

        var navView = (
            <View style={{flex:1, backgroundColor: '#FFFFFF', margin: 40}}>
                <Text style={{ textAlign: 'left'}}>
                    In Drawer
                </Text>

                <Text style={{ textAlign: 'left'}}>
                    - Example
                </Text>
            </View>
        );

        return (
            <DrawerLayoutAndroid
                drawerWidth={340}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={ () => navView}>

                <View style={{ flex:1, alignItems: 'center', marginTop: 20}}>
                    <Text style={{ color: '#AA2211', backgroundColor: '#11EE22', margin: 20 }}>
                        Drawer Layout Android Example
                    </Text>
                </View>
            </DrawerLayoutAndroid>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

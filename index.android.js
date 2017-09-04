/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 *
 *
 */

/**
 * 1，AsyncStorage介绍
 * AsyncStorage 是一个简单的、异步的、持久化的 Key-Value 存储系统，它对于 App 来说是全局性的。它用来代替 LocalStorage。
 * 由于它的操作是全局的，官方建议我们最好针对 AsyncStorage 进行一下抽象的封装再使用，而且不是直接拿 AsyncStorage 进行使用。
 * AsyncStorage 存储的位置根据系统的不同而有所差异。iOS 中的存储类似于 NSUserDefault，通过 plist 文件存放在设备中。Android 中会存储在 RocksDB 或者 SQLite 中，取决于你使用哪个。
 *原文出自：www.hangge.com  转载请保留原文链接：http://www.hangge.com/blog/cache/detail_1567.html
 *
 * 2，相关方法
 * 1）根据键来获取值，获取的结果会放在回调函数中。
 * static getItem(key: string, callback:(error, result))
 * 2）根据键来设置值。
 * static setItem(key: string, value: string, callback:(error))
 * 3）根据键来移除项。
 * static removeItem(key: string, callback:(error))
 * 4）合并现有值和输入值。
 * static mergeItem(key: string, value: string, callback:(error))
 * 5）清除所有的项目
 * static clear(callback:(error))
 * 6）获取所有的键
 * static getAllKeys(callback:(error, keys))
 * 7）清除所有进行中的查询操作。
 * static flushGetRequests()
 * 8）获取多项，其中 keys 是字符串数组，比如：['k1', 'k2']
 * static multiGet(keys, callback:(errors, result))
 * 9）设置多项，其中 keyValuePairs 是字符串的二维数组，比如：[['k1', 'val1'], ['k2', 'val2']]
 * static multiSet(keyValuePairs, callback:(errors))
 * 10）删除多项，其中 keys 是字符串数组，比如：['k1', 'k2']
 * static multiRemove(keys, callback:(errors))
 * 11）多个键值合并，其中 keyValuePairs 是字符串的二维数组，比如：[['k1', 'val1'], ['k2', 'val2']]
 * static multiMerge(keyValuePairs, callback:(errors))
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    AsyncStorage
} from 'react-native';

//用户信息填写组件
class UserInfo extends Component {
    //构造函数
    constructor(props) {
        super(props);
        this.state = {name: '', phone: ''};
    }

    //页面的组件渲染完毕（render）之后执行
    componentDidMount(){
        var _that = this;

        //需要查询的键值
        var keys = ["name","phone"];
        //根据键数组查询保存的键值对
        AsyncStorage.multiGet(keys, function(errs, result){
            //如果发生错误，这里直接返回（return）防止进入下面的逻辑
            if(errs){
                return;
            }

            //得到的结果是二维数组（result[i][0]表示我们存储的键，result[i][1]表示我们存储的值）
            _that.setState({
                name: (result[0][1]!=null)?result[0][1]:'',
                phone: (result[1][1]!=null)?result[1][1]:''
            });
        });
    }

    //组件渲染
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.row}>
                    <View style={styles.head}>
                        <Text style={styles.label}>姓名</Text>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input}
                                   value={this.state.name}
                                   onChangeText={(name) => this.setState({name})}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.head}>
                        <Text style={styles.label}>电话</Text>
                    </View>
                    <View style={styles.flex}>
                        <TextInput style={styles.input}
                                   value={this.state.phone}
                                   onChangeText={(phone) => this.setState({phone})}/>
                    </View>
                </View>
                <View style={styles.row}>
                    <Text style={styles.btn} onPress={this.save.bind(this)}>保存</Text>
                    <Text style={styles.btn} onPress={this.clear.bind(this)}>清除</Text>
                </View>
            </View>
        );
    }

    //保存数据
    save() {
        //设置多项
        var keyValuePairs = [['name', this.state.name], ['phone', this.state.phone]]
        AsyncStorage.multiSet(keyValuePairs, function(errs){
            if(errs){
                //TODO：存储出错
                return;
            }
            alert('数据保存成功!');
        });
    }

    //清除数据
    clear() {
        var _that = this;
        AsyncStorage.clear(function(err){
            if(!err){
                _that.setState({
                    name: "",
                    phone: ""
                });
                alert('存储的数据已清除完毕!');
            }
        });
    }
}

//默认应用的容器组件
class ReactNative_View extends Component {
    render() {
        return (
            <View style={[styles.flex, styles.topStatus]}>
                <UserInfo/>
            </View>
        );
    }
}

//样式定义
const styles = StyleSheet.create({
    flex:{
        flex: 1,
    },
    topStatus:{
        marginTop:25,
    },
    row:{
        flexDirection:'row',
        height:45,
        marginBottom:10
    },
    head:{
        width:70,
        marginLeft:5,
        backgroundColor:'#23BEFF',
        height:45,
        justifyContent:'center',
        alignItems: 'center'
    },
    label:{
        color:'#fff',
        fontSize:15,
        fontWeight:'bold'
    },
    input:{
        height:45,
        borderWidth:1,
        marginRight: 5,
        paddingLeft: 10,
        borderColor: '#ccc'
    },
    btn:{
        flex:1,
        backgroundColor:'#FF7200',
        height:45,
        textAlign:'center',
        color:'#fff',
        marginLeft:5,
        marginRight:5,
        lineHeight:45,
        fontSize:15,
    },
});



// 注册应用(registerComponent)后才能正确渲染
// 注意：只把应用作为一个整体注册一次，而不是每个组件/模块都注册
AppRegistry.registerComponent('ReactNative_View', () => ReactNative_View);

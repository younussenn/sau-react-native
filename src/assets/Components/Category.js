import React, { Component } from "react";
import {
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import {View} from 'react-native-ui-lib'

class Category extends Component {
    render() {
        return (
            <TouchableOpacity   onPress={this.props._onPress}>
                <View style={{ height: 130, width: 130, marginLeft: 15, borderWidth: 0.8, borderColor: '#dddddd',borderRadius:10 }} enableShadow>
                    <View style={{ flex: 2 }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderTopRightRadius:10,borderTopLeftRadius:10, }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                        <Text style={{fontWeight:'bold',color:'#414141',marginTop:5,marginLeft:3}}>{this.props.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
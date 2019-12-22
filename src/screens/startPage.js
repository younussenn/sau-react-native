import React, { Component } from 'react';
import { Text, View,StyleSheet,Image } from 'react-native';
import { Navigation } from "react-native-navigation";
import NavFunc from '../functions/navigationFunction';
import tabNavigation from '../functions/tabNavigation';
import { firebaseAuth } from '../functions/config';
import Login from '../screens/Login';

Navigation.registerComponent(`Login`, () => Login);

export default class startPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        
    }

    componentDidMount(){   
        firebaseAuth.onAuthStateChanged(user => {        
            if(user == null)
                NavFunc.setRoot('Login');
            else
                tabNavigation.pushTabBasedApp();
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo}
                     source={require('../assets/Images/wa-logoo_sm.png')}>   
                </Image>
              
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#00a899'
    },
    logo:{
        width:48,
        height:55,
        alignItems:'center',
        justifyContent:'center',
        resizeMode:'stretch'
    }
})
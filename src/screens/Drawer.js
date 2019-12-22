import React, { Component } from 'react'
import { Image,StyleSheet,Alert } from 'react-native';
import  {View,Button} from 'react-native-ui-lib';
import NavFunc from '../functions/navigationFunction';
import { firebaseAuth } from '../functions/config';

export default class Drawer extends Component {
    
    _logout = () =>{

        Alert.alert('Çıkış','Oturumdan çıkış yapılacak. Devam Edilsin mi?',[
            
            {
                text:'Hayır',
                style: 'cancel'
            },
            {
                text:'Evet',
                onPress: ()=>{
                    firebaseAuth.signOut()
                    .then(() => NavFunc.setRoot('Login'))
                    .catch(error => this.setState({ errorMessage: error.message }));
                }
            }
        ])
    }
    
    
    render() {
        return (

        <View style={{backgroundColor:'white',flex:1}}>
            <View>
                <Image source={require('../assets/Images/company.jpg')} style={styles.header} />  
            </View>  
            <Image style={styles.avatar} source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>
            <View style={styles.body}>       
                <View marginR-5 marginL-5 >
                    
                <Button
                    size={'large'}
                    text50
                    dark10
                    marginT-20
                    marginB-2
                    borderRadius={10}
                    label="Etkinlikler"
                    labelStyle={{textAlign:'left'}}
                    outline
                    outlineColor='#00a899'
                />

                <Button
                    size={'large'}
                    text50 
             
                    dark10
                    marginB-2
                    borderRadius={10}
                    label="Müşteriler" 
                    labelStyle={{textAlign:'left'}}
                    outline
                    outlineColor='#00a899'
                />

                <Button
                    size={'large'}
                    text50
           
                    dark10
                    marginB-2
                    borderRadius={10}
                    label="Sohbetler" 
                    labelStyle={{textAlign:'left'}}
                    outline
                    outlineColor='#00a899'
                />
                </View>

                
            
            
            </View>
            <View flex bottom>
            <Button
            text50
            style={{backgroundColor:'#00a899'}}
            white
            marginT-45
            borderRadius={0}
            label="Oturumdan Çık" 
            iconSource={require('../assets/Images/icons/logout.png')}
            iconStyle={{resizeMode:'stretch',width:24,height:24}}
            onPress={() => this._logout()}
             />
        </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    header:{
      backgroundColor: "#fff",
      height:200,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:130
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:40,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
  });
import React, {Component} from 'react';
import {View, TextInput, Text, Button,Colors,TextField} from 'react-native-ui-lib';
import {Alert,ScrollView,Image,StyleSheet} from 'react-native';
import { Navigation } from 'react-native-navigation';
import tabNavigation from '../functions/tabNavigation';
import { firebaseAuth } from '../functions/config';

const eye = require("../assets/Images/icons/eye.png");
const eyeOff = require('../assets/Images/icons/eye-off.png');

export default class SignUp extends Component {

    goToScreen = (screenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: screenName
            }
        })
    }

    componentDidMount(){
        this.setState({passwordIcon: eyeOff});
        this.setState({c_passwordIcon: eyeOff});
    }

    state = { email: '', password: '', c_password:'', errorMessage: null,passwordIcon: '',passwordVisibility:true,c_passwordVisibility:true,c_passwordIcon:'' }
    handleSignUp = () => {

        if(this.state.email ==  ''){
            console.log('empty email');
            
            this.setState({errorMessage:'E-Posta adresi boş bırakılamaz.'});
        }
        else if(this.state.c_password !=  this.state.password){
            console.log('confirm');
            
            this.setState({errorMessage:'Şifreler birbiriyle uyuşmuyor.'});
        }
        else  if(this.state.password ==  ''){
            console.log('empty password');
            
            this.setState({errorMessage:'Şifre boş bırakılamaz.'});
        }
        else{
            console.log('handleSignUp')
            firebaseAuth.createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => tabNavigation.pushTabBasedApp())
                .catch(error => this.setState({ errorMessage: error.message }));
        }
    }


    showPassword = () => {
        console.log(this.state.passwordVisibility);
        
        if(this.state.passwordVisibility== true){
            this.setState({
                passwordIcon: eye,
                passwordVisibility: false
            });
        }
        
      }
    
      hidePassword = () =>  {
        console.log(this.state.passwordVisibility);
    
        if(this.state.passwordVisibility == false){
            this.setState({
                passwordIcon: eyeOff,
                passwordVisibility: true
            });
        }
    
      }
      
      showCPassword = () => {
        console.log(this.state.c_passwordVisibility);
        
        if(this.state.c_passwordVisibility== true){
            this.setState({
                c_passwordIcon: eye,
                c_passwordVisibility: false
            });
        }
        
      }
    
      hideCPassword = () =>  {
        console.log(this.state.c_passwordVisibility);
        
        
        if(this.state.c_passwordVisibility == false){
            this.setState({
                c_passwordIcon: eyeOff,
                c_passwordVisibility: true
            });
        }
    
      }



  render() {
    return (
      <View flex paddingH-25 paddingT-20 useSafeArea backgroundColor={'#00a899'}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"> 
            <Image style={styles.logo}
                source={require('../assets/Images/wa-logoo_sm.png')}>   
            </Image>
       
        <Text white  marginB-55 marginT-25 style={{fontWeight:'bold',fontSize:30}}>
            Kaydol!
        </Text>
        
        {this.state.errorMessage &&
            <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
            </Text>
        }
        <TextField 
            text50 
            title="E-Posta"
            titleColor="white" 
            titleStyle={{fontWeight:'bold',letterSpacing: 1.5,fontSize:17}}
            underlineColor={{focus:'white'}}
            white 
            onChangeText={(email) => this.setState({ email })} 
            autoCapitalize='none'
            returnKeyType='next'
            keyboardType='email-address'    
        />

        <TextField 
            text50 
            title="Şifre"
            titleColor="white" 
            titleStyle={{fontWeight:'bold',letterSpacing: 1.5,fontSize:17}}
            underlineColor={{focus:'white'}}
            secureTextEntry={this.state.passwordVisibility} 
            white 
            returnKeyType='go'
            rightButtonProps={{iconSource: this.state.passwordIcon, onPress: this.state.passwordVisibility == true ? this.showPassword : this.hidePassword, iconColor: Colors.white}}
            onChangeText={(password) => this.setState({ password })}
        />

        <TextField 
            text50 
            title="Şifre Doğrula"
            titleColor="white" 
            titleStyle={{fontWeight:'bold',letterSpacing: 1.5,fontSize:17}}
            underlineColor={{focus:'white'}}
            secureTextEntry ={this.state.c_passwordVisibility}
            white 
            returnKeyType='go'
            rightButtonProps={{iconSource: this.state.c_passwordIcon, onPress: this.state.c_passwordVisibility == true ? this.showCPassword : this.hideCPassword, iconColor: Colors.white}}
            onChangeText={(c_password) => this.setState({ c_password })}
        />

        
        <View marginT-45 center>
          <Button 
            text70 
            size={'large'}
            labelStyle={{letterSpacing: 1,fontWeight:'bold',fontSize:18}}
            style={{width:'95%',height:42}}
            outline
            outlineColor={Colors.white}
            white label="Kaydı Tamamla" marginT-15 onPress={() => this.handleSignUp()}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    logo:{
        width:52,
        height:55,
        alignItems:'flex-start',
        justifyContent:'flex-start',
        resizeMode:'stretch'
    }
  })
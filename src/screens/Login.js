import React, {Component} from 'react';
import {Alert,ScrollView,StyleSheet} from 'react-native';
import {View, TextInput, Text, Button,TextField,Colors,Image} from 'react-native-ui-lib';
import { firebaseAuth } from '../functions/config';
import tabNavigation from '../functions/tabNavigation';
import {Navigation} from 'react-native-navigation';
import SignUp from '../screens/SignUp';


const eye = require("../assets/Images/icons/eye.png");
const eyeOff = require('../assets/Images/icons/eye-off.png');
const googleIcon = require('../assets/Images/icons/google.png');


export default class Login extends Component {

      goToScreen = (screenName,topBarName) => {
              Navigation.push(this.props.componentId, {
                  component: {
                      name: screenName,
                    options:{
                        topBar:{
                            title:{
                                text:topBarName
                            }
                        }
                    }
                  }
              })
      }

componentDidMount(){
    Navigation.registerComponent(`SignUp`, () => SignUp);

    this.setState({passwordIcon: eyeOff});
}


  state = { email: '', password: '', errorMessage: null,passwordVisibility: true,passwordIcon: '',loggedIn: false }
  
  handleLogin = () => {
    if(this.state.email ==  ''){
      console.log('empty email');
      
      this.setState({errorMessage:'E-Posta adresi boş bırakılamaz.'});
    }
    else  if(this.state.password ==  ''){
      console.log('empty password');
      
      this.setState({errorMessage:'Şifre boş bırakılamaz.'});
    }
    else{
    console.log('handleLogin')
    firebaseAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => tabNavigation.pushTabBasedApp())
      .catch(error => this.setState({ errorMessage: error.message }))
    }
  }

  firebaseGoogleLogin = async () => {
    try {
      Alert.alert('Google ile devam et.','Coming soon.');
    } catch (error) {
      console.log(error) 
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
    


  render() {
    return (
    
      <View flex paddingH-25 paddingT-50 useSafeArea backgroundColor={'#00a899'} style={{width:'100%',height:'100%'}}>
        <ScrollView 
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"> 

            <Image style={styles.logo}
                     source={require('../assets/Images/wa-logoo_sm.png')}>   
            </Image>

            <Text white  marginB-55 marginT-25 style={{fontWeight:'bold',fontSize:26}}>
                Work Assist'e Hoş Geldiniz.
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

        <View marginT-30 center>

          <Button 
            size={'large'}
            labelStyle={{letterSpacing: 1,fontWeight:'bold',fontSize:18}}
            style={{width:'95%',height:42}}
            outline
            outlineColor={Colors.white}
            white
            label="Giriş Yap"
            onPress={() => this.handleLogin()}
          />
          
          <Button 
            size={'large'}
            labelStyle={{letterSpacing: 1,fontWeight:'bold',fontSize:18,color:'#00a899'}}
            style={{width:'95%',height:42}}
            backgroundColor='white'
            iconSource={googleIcon}
            iconStyle={{tintColor: '#00a899',resizeMode:'stretch',width:15,height:15,}}
            label="Google ile devam et"
            marginT-15
            onPress={() => this.firebaseGoogleLogin()}
          />
        </View>
        
        <View flex bottom>
          <Button
            link 
            text70 
            white
            marginT-45
            label="Hesabın yok mu? Kaydol." 
            onPress={() => this.goToScreen('SignUp','Kayıt Ol')}
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

 
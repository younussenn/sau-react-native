import React, { Component } from 'react'
import {ScrollView,StyleSheet,Alert } from 'react-native'
import { Calendar } from 'react-native-calendars';
import {Constants, Colors, View, Card, Button, Text, Image, Assets} from 'react-native-ui-lib';
import NavFunc from '../../functions/navigationFunction';
import { firebaseAuth } from '../../functions/config';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../../assets/Components/Category'


const archIcon = require('../../assets/Images/icons/arch.png');
const layersIcon = require('../../assets/Images/icons/layers.png');
const bagIcon = require('../../assets/Images/icons/bag-personal-outline.png');
import projectList from '../projectList';
import taskList from '../taskList';
import todayWorkList from '../todayWorkList';
import ClockScreen from '../ClockScreen'
import StopWatch from '../StopWatch'
import WeatherScreen from '../WeatherScreen'
import Login from '../Login'


import {LocaleConfig} from 'react-native-calendars';
LocaleConfig.locales['tr'] = {
  monthNames: ['Ocak','Şubat','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
  monthNamesShort: ['Ocak','Şubat.','Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'],
  dayNames: ['Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi','Pazar'],
  dayNamesShort: ['Pzt.','Sa.','Çrş.','Prş.','Cu.','Cmt.','Paz.'],
  today: 'Bugün'
};
LocaleConfig.defaultLocale = 'tr';
 
 

export default class homeTab extends Component {
 
static get options() {
        return {
          topBar: {
            title: {
              text: 'Screen',
            },
            // Configure your button style here
            leftButtons: [
              {
                id: "Drawer",
                icon: require('../../assets/Images/icons/menu.png'),
              }
            ]
          }
        };
      }

      constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
      }

      navigationButtonPressed({ buttonId }) {
        if (buttonId === 'Drawer') {
            NavFunc.OpenDrawer();
        }
      }


      

    componentDidMount(){
        Navigation.registerComponent(`projectList`, () => projectList);
        Navigation.registerComponent(`taskList`, () => taskList);
        Navigation.registerComponent(`todayWorkList`, () => todayWorkList);
        Navigation.registerComponent(`ClockScreen`, () => ClockScreen);
        Navigation.registerComponent(`StopWatch`, () => StopWatch);
        Navigation.registerComponent(`WeatherScreen`, () => WeatherScreen);
        Navigation.registerComponent(`Login`, () => Login);
    }
 

    _onPressButton = (screenName,topBarTitle,topBarVisible) => {
        Navigation.push(this.props.componentId,{
            component:{
                id: screenName,
                name:screenName,
                options: {
                    topBar: {
                      title: {
                        text: topBarTitle
                      },
                      visible:topBarVisible
                    },
                    bottomTabs: {
                        visible: false,
                        drawBehind: true
                      }
                  }
            }
        })
    }


  
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
            
        <ScrollView style={styles.body}>
          <View flex top style={{width:'100%',height:'100%'}}>
             
            <Card height={360} flex marginV-15 activeOpacity={1}  marginR-8 marginL-8 enableShadow  borderRadius={10} borderColor={Colors.orange30} borderWidth={1}>
                
                <Calendar
                    style={styles.calendar}
                    current={'2019-12-08'}
                    markingType={'multi-period'}
                    markedDates={{
                        '2019-12-08': {
                        periods: [
                            { startingDay: true, endingDay: false, color: '#5f9ea0' },
                            { startingDay: true, endingDay: false, color: '#ffa500' },
                        ]
                        },
                        '2019-12-09': {
                        periods: [
                            { startingDay: false, endingDay: true, color: '#5f9ea0' },
                            { startingDay: false, endingDay: true, color: '#ffa500' },
                            { startingDay: true, endingDay: false, color: '#f0e68c' },
                        ]
                        },
                        '2019-12-10': {
                        periods: [
                            { startingDay: true, endingDay: true, color: '#ffa500' },
                            { color: 'transparent' },
                            { startingDay: false, endingDay: false, color: '#f0e68c' },
                        ]
                        },
                    }}
                    hideArrows={false}
                />

            </Card>

            <View marginR-6 marginL-6 >

                <View flex row paddingT-2 >  

                    <Button
                        size={'large'}
                        iconSource={layersIcon}
                        label='PROJELER'
                        labelStyle={{fontWeight: '800',letterSpacing: 3,fontWeight:'bold'}}
                        style={{marginBottom: 10,height:50}}
                        enableShadow
                        backgroundColor={'#00a899'}
                        animateLayout
                        flex left
                        marginL-5 marginR-8
                        borderRadius={15}
                        onPress={() => this._onPressButton('projectList','Proje Listesi',true) }
                        
                    />
                    <Button
                        size={'large'}
                        iconSource={archIcon}
                        label='GÖREVLER'
                        labelStyle={{fontWeight: '800',letterSpacing: 3,fontWeight:'bold'}}
                        style={{marginBottom: 10,height:50}}
                        enableShadow
                        backgroundColor={'#00a899'}
                        animateLayout
                        flex right
                        marginL-8 marginR-5
                        borderRadius={15}
                        onPress={() => this._onPressButton('taskList','Görev Listesi',true) }
                    />
                </View>

                <View flex row paddingT-2 >                    
                    <Button
                        size={'large'}
                        iconSource={bagIcon}
                        label='BUGÜNKÜ İŞLERİM'
                        labelStyle={{fontWeight: '800',letterSpacing: 3,fontWeight:'bold'}}
                        style={{marginBottom: 20,height:50}}
                        enableShadow
                        backgroundColor={'#e32636'}
                        animateLayout
                        flex left 
                        marginL-5 marginR-5
                        borderRadius={15}     
                        onPress={() => this._onPressButton('todayWorkList','Bugünkü İşlerim',true) }               
                    />
                    
                </View>


                
            </View>
            
            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 ,color:'#3d3d3d'}}>
                                Keşfet
            </Text>
           
            <View style={{ height: 130, marginTop: 20,marginBottom:20 }}>
            
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                    <Category imageUri={require('../../assets/Images/weather.jpg')}
                        name="Hava Durumu"
                        _onPress={() => this._onPressButton('WeatherScreen','Hava Durumu',false)}
                    />

                    <Category imageUri={require('../../assets/Images/worldClock.png')}
                        name="Dünya Saatleri"
                        _onPress={() => this._onPressButton('ClockScreen','Dünya Saatleri',false)}
                    />
                    <Category imageUri={require('../../assets/Images/stopwatch.jpg')}
                        name="Kronometre"
                        _onPress={() => this._onPressButton('StopWatch','Kronometre',false)}
                    />
                    <Category imageUri={require('../../assets/Images/oldalarmclock.jpg')}
                        name="Alarmlar"
                    />
                    <Category imageUri={require('../../assets/Images/support.png')}
                        name="Destek"
                    />
                    <Category imageUri={require('../../assets/Images/company.jpg')}
                        name="Kurum"
                    />
                </ScrollView>
            </View>
            
            <View flex bottom>
            <Button
            text70 
            style={{backgroundColor:'#3d3d3d'}}
            white
            marginT-45
            borderRadius={0}
            label="Oturumdan Çık." 
            onPress={() => this._logout()}/>
            </View>

            

          </View> 
        </ScrollView>

            
        )
    }
   
}

const styles = StyleSheet.create({

    body:{
        backgroundColor: 'white',
        flex: 1,
    },
    calendar: {
        borderTopWidth: 1,
        paddingTop: 2,
        borderBottomWidth: 1,
        borderColor: '#fff',
        height: 300,
        marginTop:8
    },




});
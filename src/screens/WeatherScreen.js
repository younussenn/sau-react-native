'use strict';
import React,{Component} from 'react';
import { StyleSheet, Text, View, Animated,Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { API_KEY } from '../utils/WeatherAPIKey';
import { weatherConditions } from '../utils/WeatherConditions';
import {Button} from 'react-native-ui-lib';

const weatherRainy = require("../assets/Images/weather-rainy.png");
const weatherSunny = require("../assets/Images/weather-sunny.png");
const weatherLightning = require("../assets/Images/weather-lightning.png");
const weatherCloudy = require("../assets/Images/weather-cloudy.png");
const weatherSnowy = require("../assets/Images/weather-snowy.png");
const weatherPartialRainy = require("../assets/Images/weather-hail.png");
const weatherHail = require("../assets/Images/weather-hail.png");
const weatherFog = require("../assets/Images/weather-fog.png");


export default class WeatherScreen extends Component {
  state = {
    isLoading: true,
    temperature: 0,
    weatherCondition: null,
    error: null
  };


 

  componentDidMount() {
    console.log('Hava Durumu Verisi Alınıyor..');
    
    
    Geolocation.getCurrentPosition(
      position => {
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Hava durumu verisi alınamadı.'
        });
      }
    );
  }

 

  fetchWeather(lat, lon) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
        
        this.setState({
          temperature: json.main.temp,
          weatherCondition: json.weather[0].main,
          isLoading: false
        });
      });
  }

  render() {
    const { isLoading, weatherCondition, temperature } = this.state;
    return (
      <View style={styles.container}>
        {
          this.state.isLoading ? 
          (
          
            <View style={styles.loadingContainer}>
              <Text style={styles.loadingText}>Hava Durumu Verisi Alınıyor..</Text>
            </View>
          
          ) 
          :
          (
            <View
              style={[ styles.weatherContainer,
              { backgroundColor: weatherConditions[this.state.weatherCondition].color }
              ]}
            >
                <View style={styles.headerContainer}>
                 
                    <Button
                      size={'large'}
                      style={{width:100,height:100}}
                      iconSource={weatherCloudy}
                      iconStyle={{tintColor: '#fff',resizeMode:'stretch',width:72,height:72}}
                      label=""
                      link
                    />
                    
                    <Text style={styles.tempText}>{this.state.temperature}˚</Text>
                </View>
                <View style={styles.bodyContainer}>
                  <Text style={styles.title}>{weatherConditions[this.state.weatherCondition].title}</Text>
                  <Text style={styles.subtitle}>
                    {weatherConditions[this.state.weatherCondition].subtitle}
                </Text>
            </View>

            </View>


          )
      
           
        }


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00a899'
  },
  loadingText: {
    fontSize: 30
  },
  weatherContainer: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tempText: {
    fontSize: 72,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 60,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});
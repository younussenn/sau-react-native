import React,{Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import { weatherConditions } from '../../utils/WeatherConditions';


class Weather extends Component {
  render() {
  return (
    <View
    style={[
      styles.weatherContainer,
     { backgroundColor: weatherConditions[this.props.weather].color }
    ]}
    >
  <View style={styles.headerContainer}>
        <MaterialCommunityIcons
          size={72}
          name={weatherConditions[this.props.weather].icon}
          color={'#fff'}
        />
      <Text style={styles.tempText}>{this.props.temperature}˚</Text>
  </View>
  <View style={styles.bodyContainer}>
      <Text style={styles.title}>{weatherConditions[this.props.weather].title}</Text>
      <Text style={styles.subtitle}>
        {weatherConditions[this.props.weather].subtitle}
    </Text>
  </View>
</View>
  );
}
}
export default Weather;



 

const styles = StyleSheet.create({
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

 
import React, { Component } from 'react'
import styled from 'styled-components/native'

import Header from '../assets/Components/Clock/Header'
import Clock from '../assets/Components/Clock'
import Time from '../assets/Components/Clock/Time'
import worldClockList from '../screens/worldClockList'
import {Button,Colors} from 'react-native-ui-lib'
import {Navigation} from 'react-native-navigation';
import { colors, clock } from '../assets/Constants/global'




const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.background};
`

const Title = styled.Text`
  color: ${colors.clockTitle};
  font-size: 30px;
  padding-bottom: 8px;
`



export default function ClockScreen({ navigation }) {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setInterval(handleUpdate, 1000)
  }, [])

  React.useState(Navigation.registerComponent('worldClockList', () => worldClockList))

  const handleUpdate = () => {

    setTime(new Date())
  }

  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()

  const _onPressButton = () => {

    Navigation.push('ClockScreen',{
        component:{
            name:'worldClockList',
            options: {
                topBar: {
                  title: {
                    text: 'Şehirler'
                  },
                  visible:true
                }
              }
        }
    })
  }

  


  return (
    
    <Container>
      
      <Clock />
      <Title>Türkiye</Title>
      <Time
        time={`${h % 12}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
      />
      <Button 
          size={'large'}
          labelStyle={{letterSpacing: 1,fontWeight:'bold',fontSize:18}}
          style={{width:50,height:50,backgroundColor:Colors.orange30}}
          label=""
          red20
          iconSource={require('../assets/Images/web-clock.png')}
          iconStyle={{tintColor: '#fff',resizeMode:'stretch'}}
          marginT-20
          onPress={_onPressButton}/>
    </Container>
  )
}
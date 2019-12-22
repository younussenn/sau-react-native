import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const colors = {
  primary: '#000',
  secondary: '#000',
  accent: '#000',
  settingsHeader: '#142550',
  settingsTitle: '#EDF1FB',
  settingsSubTitle: '#66718D',
  settingsButton: '#F7F9FC',
  background: '#00a899',
  backgroundDark: '#142550',
  clockBackground: '#009689',
  clockFace: '#00a899',
  clockFaceSmall: '#E3EAF8',
  clockTitle: '#b2246c',
}

export const shadow = {
  main: '#000',
  color: '#000',
  dark: '#000',
  avatar: '#000',
}

export const clock = {
  size: 337,
  hourColor: 'white',
  handWidth: 4,
  handHeight: 154,
  handRadius: 4,
  minuteColor: 'white',
  secondColor: 'white',
}

export const clockSM = {
  size: 150,
  hourColor: 'white',
  handWidth: 4,
  handHeight: 140,
  handRadius: 4,
  minuteColor: 'white',
  secondColor: 'white',
}

export const phone = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export const avatar = {
  size: 130,
}
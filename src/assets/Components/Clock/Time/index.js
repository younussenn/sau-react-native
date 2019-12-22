import React, { Component } from 'react'
import styled from 'styled-components/native'
import { colors } from '../../../Constants/global'

const Container = styled.View``

const TimeText = styled.Text`
  color: white;
  font-weight: 600;
  font-size: 60px;
`

const Time = props => {
  const { time } = props

  return (
    <Container>
      <TimeText>{time}</TimeText>
    </Container>
  )
}

export default Time
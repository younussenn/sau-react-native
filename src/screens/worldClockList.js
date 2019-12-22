import React, { Component } from 'react'
import  { ScrollView } from 'react-native'
import styled from 'styled-components/native'


import ClockSmall from '../assets/Components/Clock/ClockSmall'
import Time from '../assets/Components/Clock/Time'

import { colors, phone } from '../assets/Constants/global'

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.background};
`

const Title = styled.Text`
  color: black;
  font-size: 30px;
`

const ListItem = styled.View`
  width: ${phone.width};
  height: 110px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1.1px;
  border-style: solid;
  border-bottom-color: #ccd1da;
`

const TextWrap = styled.View`
  flex-direction: column;
`

const ListContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  flex: 1;
`

const ListClock = styled.View`
  weight: 70px;
  height: 70px;
`

const ListZone = styled.Text`
  font-size: 26px;
`

const ListTime = styled.Text`
  font-size: 20px;
`

const ListDate = styled.Text`
  font-size: 20px;
  margin-right: 20px;
`

export default function worldClockList() {
  const [time, setTime] = React.useState(new Date())

  React.useEffect(() => {
    setInterval(handleUpdate, 1000)
  }, [])

  const handleUpdate = () => {
    setTime(new Date())
  }

  const h = time.getHours()
  const m = time.getMinutes()
  const s = time.getSeconds()

  return (
    <Container>
 <ScrollView>
      <ListItem>
     
        <ListContent>
          <TextWrap>
            <ListZone>Paris</ListZone>
            <ListTime>
              {`${h % 12 -1}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 1 saat önce</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
       
        <ListContent>
          <TextWrap>
            <ListZone>Chicago</ListZone>
            <ListTime>
              {`${h % 12 -8}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 8 saat önce</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
        
        <ListContent>
          <TextWrap>
            <ListZone>Londra</ListZone>
            <ListTime>
              {`${h % 12 -2}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 2 saat önce</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
        
        <ListContent>
          <TextWrap>
            <ListZone>Kudüs</ListZone>
            <ListTime>
              {`${h % 12}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
        
        <ListContent>
          <TextWrap>
            <ListZone>Pekin</ListZone>
            <ListTime>
              {`${h % 12 +6}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 6 saat sonra</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
        
        <ListContent>
          <TextWrap>
            <ListZone>Tokyo</ListZone>
            <ListTime>
              {`${h % 12 +7}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 7 saat önce</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
        
        <ListContent>
          <TextWrap>
            <ListZone>Güney Kutbu</ListZone>
            <ListTime>
              {`${h % 12 +11}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 11 saat sonra</ListDate>
        </ListContent>
      </ListItem>
      <ListItem>
        
        <ListContent>
          <TextWrap>
            <ListZone>Washington D.C.</ListZone>
            <ListTime>
              {`${h % 12 -7}:${m < 10 ? `0${m}` : m}${h < 12 ? ' AM' : ' PM'}`}
            </ListTime>
          </TextWrap>
          <ListDate>Bugün, 7 saat önce</ListDate>
        </ListContent>
      </ListItem>
      </ScrollView>
    </Container>
  )
}
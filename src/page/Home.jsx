import React from 'react'
import { View, Text,StyleSheet, Button } from 'react-native'
import {  connect } from 'react-redux'
import { MapStateToProps } from 'react-redux'

function Home(props) {


  const {object} = props


  return (
    <View style={style.conteiner} >
      <Text>
        Hola
      </Text>

      <Text>
        si la verdad { object} 
      </Text>
    </View>
  )
}

const style = StyleSheet.create({
  conteiner : {
    marginTop : 20
  }
})

//Access State
function mapStateToProps(state) {
  const {object} = state
  return {object}
}

export default connect(mapStateToProps)(Home)
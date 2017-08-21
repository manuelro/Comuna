import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, StatusBar, Image } from 'react-native'

import Slider from '../components/Slider'
import List from '../components/List'
import Wrapper from '../components/Wrapper'
import {ListItem} from '../shared/models'
import {getUniqueCrimesByProperty} from '../shared/utils'

// Load the data
const data = require("../shared/data.json")

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Bienvenido',
    drawerLabel: 'Bienvenido',
  }

  render() {
    const { navigate } = this.props.navigation // Usar para navegacion

    const monthsLists = []
    var monthsListsCounter = 0
    for(item in data["Meses"]){
      let month = data["Meses"][item]
      monthsLists.push(<List title={item} items={getUniqueCrimesByProperty(month, "Delito")} key={monthsListsCounter} />)
      monthsListsCounter++
    }

    return (
      <ScrollView style={styles.container}>
        <Slider style={styles.slider}/>
        <Text style={styles.note}>Datos para 2016</Text>
        <Wrapper>
          {monthsLists}
        </Wrapper>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  note: {
    textAlign: "center"
  },
  slider: {
    height: 300
  }
})

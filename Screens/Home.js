import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, StatusBar, Image } from 'react-native'

import Slider from '../components/Slider'
import List from '../components/List'
import Wrapper from '../components/Wrapper'

class ListItem {
  constructor(title, subtitle, uri){
    this.title = title
    this.subtitle = subtitle
    this.uri = uri
  }
}

const categories = [
  new ListItem('Asaltos', 'Foo description', 'howdy'),
  new ListItem('Robos', 'Foo description', 'howdy'),
  new ListItem('Tacha', 'Foo description', 'howdy'),
  new ListItem('Otros', 'Foo description', 'howdy'),
  new ListItem('Asaltos', 'Foo description', 'howdy'),
  new ListItem('Robos', 'Foo description', 'howdy'),
  new ListItem('Tacha', 'Foo description', 'howdy'),
  new ListItem('Otros', 'Foo description', 'howdy'),
]

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Bienvenido',
    drawerLabel: 'Bienvenido',
  }

  render() {
    const { navigate } = this.props.navigation // Usar para navegacion

    return (
      <ScrollView style={styles.container}>
        <Slider style={styles.slider}/>
        <Wrapper>
          <List title="Algunas categorias" items={categories}/>
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
  slider: {
    height: 300
  }
})

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Cat extends React.Component {
  static navigationOptions = {
    title: 'Categorias',
    drawerLabel: 'Categorias',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Categorias</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

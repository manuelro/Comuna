import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Result extends React.Component {
  static navigationOptions = {
    title: 'Resultados',
    drawerLabel: 'Resultados',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Resultados</Text>
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

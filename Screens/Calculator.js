import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Calculator extends React.Component {
  static navigationOptions = {
    title: 'Calculadora',
    drawerLabel: 'Calculadora',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Calculadora</Text>
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

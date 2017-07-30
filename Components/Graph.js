import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Graph extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Button
        onPress={() => navigate('Stats')}
        title="Chat with Lucy"
        />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
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

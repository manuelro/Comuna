import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class Title extends React.Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>{this.props.children}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 10
  },
  text: {
    textAlign : 'left',
    fontSize: 22
  }
})

import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Title extends React.Component {
  render() {
    return (
      <Text style={styles.text}>{this.props.children}</Text>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18
  },
})

import React from 'react'
import { StyleSheet, View } from 'react-native'

export default class Wrapper extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    margin: 10
  },
})

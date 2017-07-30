import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Title from './Item/Title'
import Subtitle from './Item/Subtitle'

export default class Item extends React.Component {
  render() {
    return (
      <View style={styles.item}>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    height: 70,
    marginTop: 5,
    marginBottom: 5,
    elevation: 2,
    padding: 10,
    borderRadius: 5,
  },
})

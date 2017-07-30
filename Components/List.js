import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import Item from './List/Item'
import Title from './Title'

export default class List extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => <Item key={`entry-${index}`} {...item} />)

    return (
      <View style={styles.list}>
        <Title>{this.props.title}</Title>
        {items}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  list: {

  },
})

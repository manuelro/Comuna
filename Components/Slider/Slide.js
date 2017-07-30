import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default class Carousel extends React.Component {
  render() {
    Object.assign(styles, {
      slide: {
        width: this.props.width,
        height: this.props.height,
      },
      image: {
        width: this.props.width,
        height: this.props.height,
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      }
    })

    console.log(this.props.image)

    return (
      <View style={styles.slide}>
        <Image style={styles.image} source={this.props.image}>
          <View style={styles.backdropView}>
            <Text style={styles.text}>{this.props.text}</Text>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  backdropView: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'rgba(0,0,0,0)',
    padding: 20,
  },
})

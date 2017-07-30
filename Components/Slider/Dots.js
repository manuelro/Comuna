import React from 'react'
import { StyleSheet } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import colors from '../../shared/colors'

export default class Dots extends React.Component {
  render() {
    return (
      <Pagination
        dotsLength={this.props.entries.length}
        activeDotIndex={this.props.activeIndex}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        dotStyle={styles.dots}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    )
  }
}

const styles = StyleSheet.create({
  dots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: colors.blue.hsl().string()
  }
})

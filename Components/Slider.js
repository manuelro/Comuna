import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'

import Slide from './Slider/Slide'
import Dots from './Slider/Dots'

const horizontalMargin = 0
const sliderWidth = Dimensions.get('window').width
const slideWidth = sliderWidth
const itemWidth = slideWidth + horizontalMargin * 2
const itemHeight = 300

class Entry{
  constructor(width, height, image, text){
    this.width = width
    this.height = height
    this.image = image
    this.text = text
  }
}

const entries = [
  new Entry(itemWidth, itemHeight, require(`../assets/images/police-2.jpg`), 'Conozca estadísticas recientes de criminalidad en Costa Rica'),
  new Entry(itemWidth, itemHeight, require(`../assets/images/police-1.jpg`), 'El Gobierno de Costa Rica se preocupa por su seguridad'),
  new Entry(itemWidth, itemHeight, require(`../assets/images/police-3.jpg`), 'Mantengase alerta con respecto a los ultimos datos estadisticos sobre criminalidad'),
]

export default class Slider extends React.Component {
  state = {}

  handleOnSnapToItem = (index) => {
    this.setState({ activeIndex: index })
  }

  render() {
    const slides = entries.map((entry, index) => <Slide key={`entry-${index}`} {...entry} />)

    return (
      <View style={this.props.style}>
        <Carousel
          ref={(carousel) => { this._carousel = carousel }}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          onSnapToItem={this.handleOnSnapToItem}
          scrollEndDragDebounceValue={10}
          animationOptions={{
            duration: 250
          }}
        >
          {slides}
        </Carousel>
        <Dots entries={entries} activeIndex={this.state.activeIndex || 0}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

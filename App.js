import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Home from './Screens/Home'
import Calculator from './Screens/Calculator'
import Categories from './Screens/Categories'
import Results from './Screens/Results' // Triggered by a calculation

export default DrawerNavigator({
  Home: { screen: Home },
  Categories: { screen: Categories },
  Calculator: { screen: Calculator },
})

import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'

import Home from './screens/Home'
import Calculator from './screens/Calculator'
import Categories from './screens/Categories'
import Results from './screens/Results' // Triggered by a calculation

export default DrawerNavigator({
  Home: { screen: Home },
  Categories: { screen: Categories },
  Calculator: { screen: Calculator },
})

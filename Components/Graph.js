import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { VictoryAxis, VictoryLine, VictoryChart, VictoryStack, VictoryTheme } from "victory-native";

//Datos para probar el grafico
const delitos2016 = [
  {crimen: 'robo', cantidad: 345},
  {crimen: 'asalto', cantidad: 500},
  {crimen: 'hurto', cantidad: 225},
  {crimen: 'tacha de auto', cantidad: 50},
  {crimen: 'homicidio', cantidad: 300},
  {crimen: 'robo vehiculo', cantidad: 30}
]

const delitos2017 = [
  {crimen: 'robo', cantidad: 225},
  {crimen: 'asalto', cantidad: 437},
  {crimen: 'hurto', cantidad: 117},
  {crimen: 'tacha de auto', cantidad: 35},
  {crimen: 'homicidio', cantidad: 87},
  {crimen: 'robo vehiculo', cantidad: 10}
]

export default class Graph extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Button
        onPress={() => navigate('Stats')}
        title="Chat with Lucy"
        />
        <VictoryChart
          domainPadding = {0}
          padding={{ top: 20, bottom: 100, left: 20, right: 20 }}
          theme = {VictoryTheme.material} >

          <VictoryAxis
          tickValues= {[1,2,3,4,5,6]}
          tickFormat = {['1', '2', '3', '4','5','6']}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`${x / 100}`)}
          />

          <VictoryStack
            style = {{
              data: {width: 15, stroke: "white", strokeWidth: 2}
            }}
              colorScale= {['red', 'blue']}>
            <VictoryLine
              data={delitos2016}
              x="crimen"
              y="cantidad"
              labels = {(datum) => datum.y}
              //height= {200}
              //width = {100}
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 }
              }}
              />
              <VictoryLine
                data={delitos2017}
                x="crimen"
                y="cantidad"
                labels = {(datum) => datum.y}
                //height= {200}
                //width = {100}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}
                />
            </VictoryStack>
          </VictoryChart>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

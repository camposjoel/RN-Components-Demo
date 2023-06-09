import React from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import { useAnimation } from '../hooks/useAnimation'

export const Animation101Screen = () => {

  const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation()

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.purpleBox,
          opacity,
          transform: [{
            translateY: position
          }]
        }}
      />

      <View style={{ flexDirection: "row" }}>
        <Button
          title="FadeIn"
          onPress={() => {
            fadeIn()
            startMovingPosition(-100)
          }}
        />
        <Button
          title="FadeOut"
          onPress={fadeOut}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  purpleBox: {
    backgroundColor: "#5856D6",
    width: 150,
    height: 150,
    marginBottom: 10,
  }
})
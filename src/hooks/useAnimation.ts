import { useRef } from 'react'
import { Animated, Easing } from 'react-native'

export const useAnimation = () => {
  const opacity = useRef(new Animated.Value(0)).current
  const position = useRef(new Animated.Value(0)).current

  const fadeIn = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(opacity, {
      toValue: 0.3,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }

  const startMovingPosition = (initialPosition: number, duration = 300) => {
    position.setValue(initialPosition)
    Animated.timing(position, {
      toValue: 0,
      duration,
      useNativeDriver: true,
      // easing: Easing.bounce
    }).start()
  }

  return {
    fadeIn,
    fadeOut,
    opacity,
    position,
    startMovingPosition
  }
}
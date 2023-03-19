import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'

export const ItemSeparator = () => {
  const { theme: { colors } } = useContext(ThemeContext)

  return (
    <View 
      style={{
        borderBottomWidth: 1,
        borderColor: colors.primary,
        opacity: 0.3,
        marginVertical: 8
      }}
    />
  )
}
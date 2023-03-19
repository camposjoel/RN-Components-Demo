import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { ThemeContext } from '../context/theme/ThemeContext'
import { styles } from '../theme/appTheme'

interface Props {
  title: string
}

export const HeaderTitle = ({ title }: Props) => {
  const { top } = useSafeAreaInsets()
  const { theme: { colors } } = useContext(ThemeContext)

  return (
    <View style={{ marginTop: top + 12, marginBottom: 12 }}>
      <Text style={{
        ...styles.title,
        color: colors.text
      }}>
        {title}
      </Text>
    </View>
  )
}
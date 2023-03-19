import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../context/theme/ThemeContext'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles as globalStyles } from '../theme/appTheme'

export const ChangeThemeScreen = () => {
  const { setDarkTheme, setLightTheme, theme: { colors } } = useContext(ThemeContext)

  return (
    <View style={globalStyles.globalMargin}>
      <HeaderTitle title='Theme' />

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: colors.primary
          }}
          activeOpacity={0.8}
          onPress={setLightTheme}
        >
          <Text style={styles.btnText}>Light</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: colors.primary
          }}
          activeOpacity={0.8}
          onPress={setDarkTheme}
        >
          <Text style={styles.btnText}>Dark</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  btn: {
    width: 150,
    height: 50,
    borderRadius: 20,
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  }
})
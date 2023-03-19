import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext'

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true
  })

  const { theme: { colors } } = useContext(ThemeContext)

  return (
    <View style={{ marginHorizontal: 20 }}>
      <HeaderTitle title="Switches" />
      
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text
        }}>isActive</Text>
        <CustomSwitch
          isOn={state.isActive}
          onChange={(value) => setState({ ...state, isActive: value })}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text
        }}>isHungry</Text>
        <CustomSwitch
          isOn={state.isHungry}
          onChange={(value) => setState({ ...state, isHungry: value })}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={{
          ...styles.switchText,
          color: colors.text
        }}>isHappy</Text>
        <CustomSwitch
          isOn={state.isHappy}
          onChange={(value) => setState({ ...state, isHappy: value })}
        />
      </View>

      <Text style={{
        color: colors.text
      }}>
        {JSON.stringify(state, null, 4)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 4
  },
  switchText: {
    fontSize: 25
  }
})
import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/Ionicons'
import { MenuItem } from '../interfaces/appInterfaces'
import { ThemeContext } from '../context/theme/ThemeContext'

interface Props {
  menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

  const navigation = useNavigation()
  const { theme: { colors } } = useContext(ThemeContext)

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(menuItem.component as never)}
    >
      <View style={styles.container}>
        <Icon
          name={menuItem.icon}
          color={colors.primary}
          size={23}
        />
        
        <Text style={{
          ...styles.itemText,
          color: colors.text
        }}>
          {menuItem.name}
        </Text>
        
        <View style={{ flex: 1 }} />
        <Icon
          name="chevron-forward-outline"
          color={colors.primary}
          size={23}
        />
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  itemText: {
    marginLeft: 8,
    fontSize: 20
  }
})
import React, { useContext } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { ThemeContext } from '../context/theme/ThemeContext'
import { useForm } from '../hooks/useForm'
import { styles as globalStyles } from '../theme/appTheme'

export const TextInputScreen = () => {
  const { form, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false
  })
  const { theme: { colors } } = useContext(ThemeContext)

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView>
        <View style={globalStyles.globalMargin}>
          <HeaderTitle title='Text Inputs' />

          <TextInput
            style={{...styles.inputDefault, color: colors.text}}
            value={form.name}
            onChangeText={(text) => onChange(text, 'name')}
            placeholder='Escriba el nombre'
            placeholderTextColor={colors.border}
            autoCorrect={false}
          />

          <TextInput
            style={{...styles.inputDefault, color: colors.text}}
            value={form.email}
            onChangeText={(text) => onChange(text, 'email')}
            placeholder='Escriba el email'
            placeholderTextColor={colors.border}
            autoCorrect={false}
            keyboardType='email-address'
          />

          <HeaderTitle title={JSON.stringify(form, null, 4)} />

          <TextInput
            style={{...styles.inputDefault, color: colors.text}}
            value={form.phone}
            onChangeText={(text) => onChange(text, 'phone')}
            placeholder='Escriba el telefono'
            placeholderTextColor={colors.border}
            keyboardType='phone-pad'
          />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  inputDefault: {
    borderWidth: 1,
    borderColor: "gray",
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  }
})
import React from 'react'
import { Alert, Button, View } from 'react-native'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert('Alerta ejemplo', 'Esto es la descripción', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Se canceló'),
        style: 'destructive'
      },
      {
        text: 'Ok',
        onPress: () => console.log('Se presionó Ok')
      }
    ], {
      cancelable: true
    })
  }

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />

      <Button
        title='Mostrar alerta'
        onPress={showAlert}
      />
    </View>
  )
}
import 'react-native-gesture-handler'
import React from 'react'
import { Navigator } from './src/navigation/navigator'
import { ThemeProvider } from './src/context/theme/ThemeContext'

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App

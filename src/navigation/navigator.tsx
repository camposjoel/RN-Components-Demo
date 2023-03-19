import React, { useContext } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ThemeContext } from '../context/theme/ThemeContext'
import { HomeScreen } from '../screens/HomeScreen'
import { Animation101Screen } from '../screens/Animation101Screen'
import { Animation102Screen } from '../screens/Animation102Screen'
import { SwitchScreen } from '../screens/SwitchScreen'
import { AlertScreen } from '../screens/AlertScreen'
import { TextInputScreen } from '../screens/TextInputScreen'
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen'
import { SectionListScreen } from '../screens/SectionListScreen'
import { ModalsScreen } from '../screens/ModalsScreen'
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen'
import { SlidesScreen } from '../screens/SlidesScreen'
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen'

const Stack = createStackNavigator();

// const CustomTheme: Theme = {
//   dark: true,
//   colors: {
//     ...DefaultTheme.colors
//   }
// }

export const Navigator = () => {

  const { theme } = useContext(ThemeContext)

  return (
    <NavigationContainer
      theme={theme}
    >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen} />
        <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
        <Stack.Screen name="PullToRefreshScreen" component={PullToRefreshScreen} />
        <Stack.Screen name="SectionListScreen" component={SectionListScreen} />
        <Stack.Screen name="ModalsScreen" component={ModalsScreen} />
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen} />
        <Stack.Screen name="SlidesScreen" component={SlidesScreen} />
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
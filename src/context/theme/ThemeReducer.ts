import { Theme, DefaultTheme, DarkTheme } from '@react-navigation/native'

type ThemeAction = { type: 'set_light_theme' } | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark',
  dividerColor: string,
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    ...DefaultTheme.colors,
    primary: 'teal'
  }
}

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    ...DarkTheme.colors,
    primary: 'teal'
  }
}

export const ThemeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {

  switch (action.type) {
    case 'set_light_theme':
      return { ...lightTheme }
    
    case 'set_dark_theme':
        return { ...darkTheme }

    default:
      return state
  }
}
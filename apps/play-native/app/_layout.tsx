import 'react-native-gesture-handler'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'
import { ThemeContextProvider, useThemeMode } from '../src/theme/useThemeMode'

function Themed() {
  const { resolved } = useThemeMode()
  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={resolved} disableInjectCSS>
      <StatusBar style={resolved === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: resolved === 'dark' ? '#0b0f14' : '#f5f7fa' },
        }}
      />
    </TamaguiProvider>
  )
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeContextProvider>
          <Themed />
        </ThemeContextProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}

import { Box, Button, NativeBaseProvider, Text } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import theme from './theme'
import Home from './scene/Home'
import Authentication from './scene/Authentication'

const colorModeManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@my-app-color-mode')

      return val === 'dark' ? 'dark' : 'light'
    }
    catch (e) {
      console.log(e)

      return 'light'
    }
  },
  set: async value => {
    try {
      await AsyncStorage.setItem('@my-app-color-mode', value)
    }
    catch (e) {
      console.log(e)
    }
  },
}
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider
        theme={theme}
        colorModeManager={colorModeManager}
      >
        <Stack.Navigator screenOptions={{
          contentStyle: {
            backgroundColor: 'white',
          },
        }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Authentication"
            component={Authentication}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

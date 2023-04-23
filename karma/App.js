import { NativeBaseProvider } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { useFonts } from 'expo-font'
import './firebase'

import theme from './theme'
import Home from './scene/Home'
import Stories from './scene/Stories'
import Authentication from './scene/Authentication'
import Achievements from './scene/Achievements'
import CreateAchievement from './scene/CreateAchievement'

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

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export default function App() {
  const [fontsLoaded] = useFonts({
    Anton: require('./assets/fonts/Anton-Regular.ttf'),
  })

  return (
    <NavigationContainer>
      <NativeBaseProvider
        theme={theme}
        colorModeManager={colorModeManager}
      >
        <Tab.Navigator
          initialRouteName="CreateAchievement"
          screenOptions={{

          }}
        >
          <Tab.Screen
            name="Stories"
            component={Stories}
          />
          <Tab.Screen
            name="Achievements"
            component={Achievements}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="CreateAchievement"
            component={CreateAchievement}
            options={{ headerShown: false }}
          />
          <Tab.Screen
            name="Home"
            component={Home}
          />
          {/* <Stack.Navigator screenOptions={{
            contentStyle: {
              backgroundColor: 'white',
            },
          }}
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Karma' }}
            />
            <Stack.Screen
              name="Authentication"
              component={Authentication}
            />
          </Stack.Navigator> */}
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splashscreen from '../screens/Splashscreen'
import Loginscreen from '../screens/Loginscreen'
import Registerscreen from '../screens/Registerscreen'
import Homescreen from '../screens/Homescreen'


const Stack  = createStackNavigator()
const Navigation = () => {
  return (

    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='splash' component={Splashscreen}></Stack.Screen>
        <Stack.Screen name='Register' component={Registerscreen}></Stack.Screen>
            
            <Stack.Screen name='Login' component={Loginscreen}></Stack.Screen>
            <Stack.Screen name='Home' component={Homescreen}></Stack.Screen>
            
      
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default Navigation
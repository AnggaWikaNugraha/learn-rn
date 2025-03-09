// In App.js in a new project

import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from './src/view/ScreenHome';
import { DetailsScreen } from './src/view/ScreenDetails';
import { ScreenParamsList } from './src/type/ScreenParamsList';
import { Button } from '@react-navigation/elements';
import { LoginScreen } from './src/view/ScreenLogin';
import { RegisterScreen } from './src/view/ScreenRegister';
import { HomeTabs } from './src/atoms/BottomNavigations';
import { ProfileScreen } from './src/view/ScreenProfile';
import { SettingsScreen } from './src/view/ScreenSettings';
import { SignInScreen } from './src/view/ScreenSignin';
import { SignUpScreen } from './src/view/ScreenSignup';
import { useAuth } from './src/view/ScreenSignin/hooks/UseAuth';
import { AuthProvider } from './src/view/ScreenSignin/state/context';
import { HomeMainScreen } from './src/view/ScreenMainHome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Demo } from './src/view/ScreenDemo';


const Stack = createNativeStackNavigator<ScreenParamsList>();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <AuthProvider>
      <WrapApp />
    </AuthProvider>
  )
}

const WrapApp = () => {
  const { state } = useAuth();

  console.log(state)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown : false,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        {state.userToken ? (
          <>
            <Stack.Screen name="Home" component={HomeMainScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
          </>
        ) : (
          <>

            <Stack.Screen name="Home" component={HomeTabs} />

            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        )}

      </Stack.Navigator>
    </NavigationContainer>
  )
}
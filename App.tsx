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
import { ModalScreenProfile } from './src/view/ModalProfile';
import './gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from './src/atoms/Drawer';

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
  // Buat Navigator
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }

  function DrawerNavigator() {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={HomeMainScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {!state.userToken ? <DrawerNavigator /> : <AuthStack />}
    </NavigationContainer>
  )
}
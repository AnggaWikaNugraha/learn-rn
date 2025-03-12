// In App.js in a new project

import React, { useEffect, useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from './src/view/ScreenHome';
import { DetailsScreen } from './src/view/ScreenDetails';
import { ScreenParamsList } from './src/type/ScreenParamsList';
import { Button } from '@react-navigation/elements';
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
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import messaging from '@react-native-firebase/messaging';
import { Alert, PermissionsAndroid, Platform } from 'react-native';

const Stack = createNativeStackNavigator<ScreenParamsList>();
const Tab = createBottomTabNavigator();


export default function App() {

  // async function requestUserPermission() {
  //   if (Platform.OS === 'android') {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
  //     );
  //     return granted === PermissionsAndroid.RESULTS.GRANTED;
  //   } else {
  //     const authStatus = await messaging().requestPermission();
  //     return (
  //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //       authStatus === messaging.AuthorizationStatus.PROVISIONAL
  //     );
  //   }
  // }

  // useEffect(() => {
  //   requestUserPermission();
  // }, []);

  // useEffect(() => {
  //   messaging()
  //     .getToken()
  //     .then(token => {
  //       console.log('FCM Token:', token);
  //     });

  //   return messaging().onTokenRefresh(token => {
  //     console.log('FCM Token refreshed:', token);
  //   });
  // }, []);

  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     console.log('Notifikasi Diterima', remoteMessage);
  //   });

  //   return unsubscribe;
  // }, []);


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
  const Tab = createMaterialTopTabNavigator();

  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    );
  }

  function MyTopTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeMainScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
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
      {state.userToken ? <MyTopTabs /> : <AuthStack />}
    </NavigationContainer>
  )
}
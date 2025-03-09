// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from './src/view/ScreenHome';
import { DetailsScreen } from './src/view/ScreenDetails';
import { ScreenParamsList } from './src/type/ScreenParamsList';
import { Button } from '@react-navigation/elements';


const Stack = createNativeStackNavigator<ScreenParamsList>();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // Add a placeholder button without the `onPress` to avoid flicker
          headerRight: () => <Button>Update count</Button>,
          headerBackTitle: 'Custom Back',
          headerBackTitleStyle: { fontSize: 30 },
        }}
      />
      <Stack.Screen
        name="Details"
        initialParams={{ itemId: 2 }}
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.itemId?.toString() ?? 'Details',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
// In App.js in a new project

import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeScreen } from './src/view/ScreenHome';
import { DetailsScreen } from './src/view/ScreenDetails';
import { ScreenParamsList } from './src/type/ScreenParamsList';


const Stack = createNativeStackNavigator<ScreenParamsList>();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Overview' }}
      />
      <Stack.Screen
        name="Details"
        initialParams={{ itemId: 2 }}
        component={DetailsScreen}
        options={({ route }) => ({
          title: route.params.itemId?.toString() ?? 'Details',
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}
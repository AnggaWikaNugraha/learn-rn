import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../view/ScreenHome";
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { DetailsScreen } from "../../view/ScreenDetails";
import Ionicons from 'react-native-vector-icons/Ionicons';

// Buat Bottom Tab Navigator
const Tab = createBottomTabNavigator<ScreenParamsList>();

export const HomeTabs = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                        ? 'ios-information-circle'
                        : 'ios-information-circle-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'ios-list' : 'ios-list-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName ?? ''} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',

        })}>
            <Tab.Screen options={{ tabBarBadge: 3 }} name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
    );
}
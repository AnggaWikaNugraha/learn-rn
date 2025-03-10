import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../view/ScreenHome";
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { DetailsScreen } from "../../view/ScreenDetails";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { Text, View } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import Icon from "react-native-vector-icons/Ionicons";

// Buat Bottom Tab Navigator
const Tab = createBottomTabNavigator<ScreenParamsList>();

function MyTabBar({ state, descriptors, navigation }: any) {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    const getIconName = (routeName: string) => {
        switch (routeName) {
            case "Home":
                return "home";
            case "Profile":
                return "account";
            case "Settings":
                return "cog";
            default:
                return "circle";
        }
    };

    return (
        <View style={{ flexDirection: "row", backgroundColor: "white", padding: 10 }}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: "tabPress",
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: "tabLongPress",
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={{
                            flex: 1,
                            alignItems: "center",
                            paddingVertical: 10,
                        }}
                    >
                        <Icon name={getIconName(route.name)} size={24} color={isFocused ? colors.primary : colors.text} />
                        <Text style={{ color: isFocused ? colors.primary : colors.text }}>{label}</Text>
                    </PlatformPressable>
                );
            })}
        </View>
    );
}


export const HomeTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                animation: 'fade',
            }}
            // screenOptions={({ route }) => ({
            //     tabBarIcon: ({ focused, color, size }) => {
            //         let iconName;

            //         if (route.name === 'Home') {
            //             iconName = focused
            //                 ? 'ios-information-circle'
            //                 : 'ios-information-circle-outline';
            //         } else if (route.name === 'Settings') {
            //             iconName = focused ? 'ios-list' : 'ios-list-outline';
            //         }

            //         // You can return any component that you like here!
            //         return <Ionicons name={iconName ?? ''} size={size} color={color} />;
            //     },
            //     tabBarActiveTintColor: 'tomato',
            //     tabBarInactiveTintColor: 'gray',

            // })}
            tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tab.Screen options={{ tabBarBadge: 3 }} name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
    );
}
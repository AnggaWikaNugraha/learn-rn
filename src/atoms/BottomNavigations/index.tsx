import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../view/ScreenHome";
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { DetailsScreen } from "../../view/ScreenDetails";

// Buat Bottom Tab Navigator
const Tab = createBottomTabNavigator<ScreenParamsList>();

export const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
    );
}
import { Button } from "@react-navigation/elements";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";

export const LoginScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ScreenParamsList>>();

    return (

        <View style={{ display: 'flex', flexDirection: 'column', gap: 15}}>
            <Text>🔐 Login Screen</Text>
            <Button onPress={() => navigation?.navigate('Register')}>Register</Button>
            <Button onPress={() => navigation?.navigate('Home', {itemId : 1})}>Home</Button>
        </View>
    );
}
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { Button } from '@react-navigation/elements';
import { ScreenParamsList } from "../../type/ScreenParamsList";

export const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenParamsList>>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen ss</Text>
      <Button onPress={() => {
        navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        });
      }}>
        Go to Details
      </Button>
    </View>
  );
};

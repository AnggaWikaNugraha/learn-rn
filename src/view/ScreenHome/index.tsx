import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert, Text, View } from "react-native";
import { Button } from '@react-navigation/elements';
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { useEffect, useState } from "react";

type HomeScreenProps = NativeStackScreenProps<ScreenParamsList, "Home">;

export const HomeScreen = ({ route }: HomeScreenProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenParamsList>>();
  const [itemID, setitemID] = useState<number>()

  useEffect(() => {
    if (route.params?.itemId) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      setitemID(route.params.itemId)
    }
  }, [route.params?.itemId]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen {itemID}</Text>
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

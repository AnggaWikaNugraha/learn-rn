import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { Button } from "@react-navigation/elements";

type DetailsScreenProps = NativeStackScreenProps<ScreenParamsList, "Details">;

export const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {
  return (
    <View>
      <Text>Item ID: {route.params.itemId}</Text>
      <Text>Other Param: {route.params.otherParam}</Text>

      <Button
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo('Home', { itemId: 1 });
        }}
      >
        Done
      </Button>

    </View>
  );
};

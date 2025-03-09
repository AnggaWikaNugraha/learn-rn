import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { ScreenParamsList } from "../../type/ScreenParamsList";

type DetailsScreenProps = NativeStackScreenProps<ScreenParamsList, "Details">;

export const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {
  return (
    <View>
      <Text>Item ID: {route.params.itemId}</Text>
      <Text>Other Param: {route.params.otherParam}</Text>
    </View>
  );
};

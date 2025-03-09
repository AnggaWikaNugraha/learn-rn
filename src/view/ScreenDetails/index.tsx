import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native";
import { ScreenParamsList } from "../../type/ScreenParamsList";
import { Button } from "@react-navigation/elements";

type DetailsScreenProps = NativeStackScreenProps<ScreenParamsList, "Details">;

export const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {
  return (
    <View>
      <Text>Item ID: {route?.params?.itemId}</Text>
      <Text>Other Param: {route?.params?.otherParam}</Text>

      <Button
        onPress={() => {
            navigation.navigate('Home', { itemId: 1 }); // ✅ Navigasi ke Home dengan params
          
            // setTimeout(() => {
            //   navigation.setOptions({ title: 'Updated!' }); // ✅ Update title setelah pindah
            // }, 100); // Tunggu sedikit sebelum update

          }}
          
      >
        Done
      </Button>

    </View>
  );
};

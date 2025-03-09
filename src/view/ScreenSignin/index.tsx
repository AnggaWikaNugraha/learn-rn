import { useState } from "react";
import { useAuth } from "./hooks/UseAuth";
import { TextInput, View } from "react-native";
import { Button } from "@react-navigation/elements";

export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { state, signIn } = useAuth();

  return (
    <View>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button onPress={() => signIn()}>Sign in</Button>
    </View>
  );
}
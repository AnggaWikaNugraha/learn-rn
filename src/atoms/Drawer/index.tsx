import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20 }}>
        <Image source={{ uri: 'https://placeimg.com/100/100/people' }} style={{ width: 80, height: 80, borderRadius: 40 }} />
        <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>John Doe</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

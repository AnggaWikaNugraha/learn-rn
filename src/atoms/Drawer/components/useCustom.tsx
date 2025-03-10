import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
} from '@react-navigation/drawer';
import { Button } from '@react-navigation/elements';
import { Linking } from 'react-native';

export const CustomDrawerContent = ({ navigation }: any) => {
    return (
        <Button
            onPress={() => {
                // Navigate using the `navigation` prop that you received
                navigation.navigate('SomeScreen');
            }}
        >
            Go somewhere
        </Button>
    );
}
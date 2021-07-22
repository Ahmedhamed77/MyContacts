import React from 'react';
import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Avatar, Text} from 'react-native-elements';
import {Drawer} from '@ui-kitten/components';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../root';

interface DrawerContentProps {
  props: DrawerContentComponentProps<DrawerContentOptions>;
  navigation: HomeScreenNavigationProp;
}
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

export const DrawerContent: React.FC<DrawerContentProps> = ({
  props,
  navigation,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Drawer>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          )}
          label="Home"
          onPress={() => {
            navigation.goBack();
            console.log('wat');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="bookmark-outline" color={color} size={size} />
          )}
          label="Favorites"
          onPress={() => {
            navigation.navigate('Favorite');
          }}
        />
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            console.log('hello');
          }}
        />
      </Drawer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

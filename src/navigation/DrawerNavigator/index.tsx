import React from 'react';

import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';
import {RootStackParamList} from '../root';
import HomeScreen from '../../screens/HomeScreen';

interface DrawerContentProps {
  props: DrawerContentComponentProps<DrawerContentOptions>;
  navigation: HomeScreenNavigationProp;
}
type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contacts'
>;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const homeScreenStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          // headerLeft: () => (
          //   <NavigationDrawerHeader navigationProps={navigation} />
          // ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = ({}) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}>
      {/* drawerContent={CustomSidebarMenu}> */}
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={homeScreenStack}
      />
    </Drawer.Navigator>
  );
};

// import React from 'react';
// import {View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';

// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {Avatar, Text} from 'react-native-elements';
// import {Drawer} from '@ui-kitten/components';
// import {
//   DrawerContentComponentProps,
//   DrawerContentOptions,
// } from '@react-navigation/drawer';
// import {StackNavigationProp} from '@react-navigation/stack';
// import {RootStackParamList} from '../root';

// interface DrawerContentProps {
//   props: DrawerContentComponentProps<DrawerContentOptions>;
//   navigation: HomeScreenNavigationProp;
// }
// type HomeScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   'Contacts'
// >;

// export const DrawerContent: React.FC<DrawerContentProps> = ({
//   props,
//   navigation,
// }) => {
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <Drawer>
//         <DrawerItem
//           icon={({color, size}) => (
//             <Icon name="home-outline" color={color} size={size} />
//           )}
//           label="Home"
//           onPress={() => {
//             navigation.goBack();
//             console.log('wat');
//           }}
//         />
//         <DrawerItem
//           icon={({color, size}) => (
//             <Icon name="bookmark-outline" color={color} size={size} />
//           )}
//           label="Favorites"
//           onPress={() => {
//             navigation.navigate('Favorite');
//           }}
//         />
//         <DrawerItem
//           icon={({color, size}) => (
//             <Icon name="exit-to-app" color={color} size={size} />
//           )}
//           label="Sign Out"
//           onPress={() => {
//             console.log('hello');
//           }}
//         />
//       </Drawer>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#f4f4f4',
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });

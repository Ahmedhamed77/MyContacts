import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {RootStackParamList} from '../root';
import HomeScreen from '../../screens/HomeScreen';
import RegisterScreen from '../../screens/RegistrationScreen';
import LoginScreen from '../../screens/LoginScreen';
import {FavoriteScreen} from '../../screens/FavoriteScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NewContact} from '../../screens/NewContactScreen';
import {DetailsScreen} from '../../screens/DetailsScreen';
import {EditScreen} from '../../screens/EditScreen';
import {Button} from 'react-native-elements';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const Router = () => {
  const [token, setToken] = useState<null | string>(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token !== null) await setToken(token);
      } catch (error: any) {
        console.log('error finding token: ' + error.message);
      }
      setLoaded(true);
    };
    getData();
  }, []);

  const ContactsTabScreen = (): JSX.Element => {
    return (
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen
          name={'Contacts'}
          component={HomeScreen}
          options={{
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name={'Favorite'}
          component={FavoriteScreen}
          options={{
            // eslint-disable-next-line react/display-name
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="favorite" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const MainStackNavigator = (): JSX.Element => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
      </Stack.Navigator>
    );
  };

  const CustomDrawerContent = (): JSX.Element => {
    return (
      <View>
        <Button title="Logout" />
      </View>
    );
  };

  const ContactsDrawerScreen = (): JSX.Element => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={ContactsTabScreen} />
        <Drawer.Screen name="Favorite" component={FavoriteScreen} />
      </Drawer.Navigator>
    );
  };
  console.log(token === null, 'tokenUser');
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token === null ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Contacts"
              component={ContactsTabScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewContact"
              component={NewContact}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <Stack.Screen
              name="DetailsScreen"
              component={DetailsScreen}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
            <Stack.Screen
              name="Edit"
              component={EditScreen}
              options={{
                ...TransitionPresets.SlideFromRightIOS,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

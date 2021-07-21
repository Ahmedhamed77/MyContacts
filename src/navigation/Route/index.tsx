import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionPresets,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import {useSelector} from 'react-redux';
import {Store} from '../../redux/store/types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const tabBarOptions = {
  showLabel: false,
  activeTintColor: '#9381ff',
  style: {
    height: '10%',
  },
};

const Router = () => {
  // const token = useSelector((store: Store) => store.user.token);

  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    return token;
  };

  const tokenUser = getToken();
  // TODO * FIXME >> move me to another file
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

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {tokenUser === null ? (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
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

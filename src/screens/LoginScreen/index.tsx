import React, {useState} from 'react';
import {Input, Button, Text} from '@ui-kitten/components';
import {View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';

import {getUserLogin} from '../../redux/user/action';
import styles from './style';
import {RootStackParamList} from '../../navigation/root';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const [loginValue, setLoginValue] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const navigationToRegister = () => {
    navigation.navigate('Register');
  };

  const loginButton = () => {
    console.log('here now');
    dispatch(getUserLogin(loginValue, loginPassword));
  };
  return (
    <View style={styles.container}>
      <Input
        style={styles.InputCommon}
        placeholder="user@example.com"
        value={loginValue}
        onChangeText={nextValue => setLoginValue(nextValue)}
      />
      <Input
        secureTextEntry={true}
        style={styles.InputCommon}
        placeholder="place your password"
        value={loginPassword}
        onChangeText={nextValue => setLoginPassword(nextValue)}
      />
      <View style={styles.controlContainer}>
        <Button
          onPress={loginButton}
          style={styles.button}
          appearance="ghost"
          status="control">
          LOGIN
        </Button>
      </View>

      <View style={styles.Footer}>
        <Text style={styles.Normal}>
          Нет аккаунта?
          <Text onPress={navigationToRegister} style={styles.Special}>
            Зарегистрироваться
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

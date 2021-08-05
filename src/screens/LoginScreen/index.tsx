import React, {useState, useEffect} from 'react';
import {Input, Text} from '@ui-kitten/components';
import {View, Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-elements';

import {getUserLogin} from '../../redux/user/action';
import styles from './style';
import {RootStackParamList} from '../../navigation/root';
import {Store} from '../../redux/store/types';

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
  const isLoading = useSelector((store: Store) => store.user.isLoading);

  const navigationToRegister = () => {
    navigation.navigate('Register');
  };

  const loginButton = () => {
    if (!loginValue.trim()) {
      Alert.alert('please enter a username');
    } else if (!loginPassword.trim()) {
      Alert.alert('please enter password');
    } else {
      dispatch(getUserLogin(loginValue, loginPassword));
      setLoginValue('');
      setLoginPassword('');
    }
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

      <Button
        title="LOGIN"
        loading={isLoading}
        onPress={loginButton}
        buttonStyle={styles.button}
      />

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

import React from 'react';
import {View, ScrollView, TextInput, Alert} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Input, Button, Text} from '@ui-kitten/components';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootStackParamList} from '../../navigation/root';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {userRegister} from '../../redux/user/action';
type RegisterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;

type Props = {
  navigation: RegisterScreenNavigationProp;
};

export interface RegisterFormData {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const RegisterScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<RegisterFormData>({
    mode: 'onSubmit',
    defaultValues: {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });
  const onSubmit = (data: any) => {
    console.log(data, 'data is here ');
    dispatch(userRegister(data));
  };

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const navigationToLogin = () => {
    navigation.navigate('Login');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Username</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter your username'}
              style={styles.input}
              onBlur={onBlur}
              maxLength={20}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="userName"
          rules={{required: true}}
        />
        <Text style={styles.label}>First name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter your firstName'}
              style={styles.input}
              onBlur={onBlur}
              maxLength={10}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="firstName"
          rules={{required: true}}
        />
        <Text style={styles.label}>Last name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter your lastName'}
              style={styles.input}
              onBlur={onBlur}
              maxLength={15}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="lastName"
          rules={{required: true}}
        />
        <Text style={styles.label}>Email</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter your Email'}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="email"
          rules={{required: true}}
        />

        <Text style={styles.label}>password</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter your Password'}
              style={styles.input}
              onBlur={onBlur}
              secureTextEntry={true}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="password"
          rules={{required: true}}
        />
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={handleSubmit(onSubmit)}>
            Register
          </Button>
        </View>
        <View style={styles.Footer}>
          <Text style={styles.Normal}>
            Есть аккаунт?
            <Text onPress={navigationToLogin} style={styles.Special}>
              Войти
            </Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

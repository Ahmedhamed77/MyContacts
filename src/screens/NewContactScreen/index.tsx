import React from 'react';

import {View, TextInput, ScrollView, ActivityIndicator} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Image} from 'react-native-elements';
import {Input, Button, Text} from '@ui-kitten/components';
import styles from './style';

export interface NewContactData {
  id: number;
  country_code: string;
  first_Name: string;
  last_name: string;
  phone_number: string;
  contact_picture: string;
  is_favorite: boolean;
}

export const NewContact = () => {
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<NewContactData>({
    mode: 'onSubmit',
    defaultValues: {
      country_code: '',
      first_Name: '',
      last_name: '',
      phone_number: '',
      contact_picture: '',
      is_favorite: false,
    },
  });
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: 'https://picsum.photos/seed/picsum/200/300',
            }}
            resizeMode={'cover'}
            style={styles.imageUser}
            PlaceholderContent={<ActivityIndicator />}
          />
        </View>

        <Text style={styles.label}>First name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter firstName'}
              style={styles.input}
              onBlur={onBlur}
              maxLength={20}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="first_Name"
          rules={{required: true}}
        />
        <Text style={styles.label}>Last name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter LastName'}
              style={styles.input}
              onBlur={onBlur}
              maxLength={10}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="last_name"
          rules={{required: true}}
        />
        <Text style={styles.label}>phone number</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter phoneNumber'}
              style={styles.input}
              onBlur={onBlur}
              maxLength={15}
              keyboardType={'numeric'}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="phone_number"
          rules={{required: true}}
        />
        <Text style={styles.label}>Country Code</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              placeholder={'enter country code'}
              style={styles.input}
              onBlur={onBlur}
              keyboardType={'numeric'}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="country_code"
          rules={{required: true}}
        />

        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            onPress={() => {
              console.log('saved');
            }}>
            Save
          </Button>
        </View>
        {/* <View style={styles.Footer}>
          <Text style={styles.Normal}>
            Есть аккаунт?
            <Text onPress={navigationToLogin} style={styles.Special}>
              Войти
            </Text>
          </Text>
        </View> */}
      </View>
    </ScrollView>
  );
};

import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-elements';
import styles from './styles';
import {Input} from '@ui-kitten/components';
import {Button} from 'react-native-elements';
import {Controller, useForm} from 'react-hook-form';

import {AddContactPayload} from '../../api/contacts/types';
import {useDispatch, useSelector} from 'react-redux';
import {updateContact} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';
import {RootStackParamList} from '../../navigation/root';

type EditScreenPNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Edit'
>;

type EditScreenRouteProp = RouteProp<RootStackParamList, 'Edit'>;

type DetailsScreenProps = {
  navigation: EditScreenPNavigationProp;
  route: EditScreenRouteProp;
};

export const EditScreen: React.FC<DetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const {person} = route.params;
  const dispatch = useDispatch();
  const {
    setValue,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<AddContactPayload>({
    mode: 'onSubmit',
    defaultValues: {
      id: person.id,
      country_code: person.country_code,
      first_name: person.first_name,
      last_name: person.last_name,
      phone_number: person.phone_number,
      contact_picture: null,
      is_favorite: person.is_favorite,
    },
  });
  const onSubmit = handleSubmit(data => {
    console.log(data, 'data');
    dispatch(updateContact(data));
    navigation.goBack();
  });
  const loading = useSelector((store: Store) => store.contact.isLoading);
  console.log(loading, 'loading');

  return (
    <ScrollView style={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.detailsHeader}>
        <View style={styles.header}>
          <Controller
            control={control}
            render={({field: {onChange, value}}) => (
              <TouchableOpacity onPress={() => onChange(!value)}>
                <MaterialIcons
                  name="favorite"
                  color={value ? 'red' : 'grey'}
                  size={35}
                />
              </TouchableOpacity>
            )}
            name="is_favorite"
          />
          <Avatar
            size="xlarge"
            rounded
            title="CR"
            onPress={() => console.log('Works!')}
            activeOpacity={0.7}
          />
        </View>
      </View>

      <View style={styles.textArea}>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              style={styles.InputCommon}
              placeholder="last name"
              onBlur={onBlur}
              maxLength={20}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="last_name"
        />
        <Text style={styles.textCommon}>Phone</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              style={styles.InputCommon}
              placeholder="Phone Number"
              keyboardType={'numeric'}
              onBlur={onBlur}
              maxLength={15}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="phone_number"
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder={'enter country code'}
              style={styles.InputCommon}
              onBlur={onBlur}
              keyboardType={'numeric'}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="country_code"
        />
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Name</Text>
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <Input
              placeholder={'First name'}
              style={styles.InputCommon}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          )}
          name="first_name"
        />
      </View>
      <View style={styles.textArea}>
        <Button
          onPress={onSubmit}
          title="Save"
          loading={loading}
          buttonStyle={{backgroundColor: '#000', paddingVertical: 10}}
        />
      </View>
    </ScrollView>
  );
};

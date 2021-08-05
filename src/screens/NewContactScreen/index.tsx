import React, {useState} from 'react';

import {
  View,
  TextInput,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {Image} from 'react-native-elements';
import {Input, Button, Text} from '@ui-kitten/components';
import styles from './style';
import {useDispatch} from 'react-redux';
import {AddContactPayload} from '../../api/contacts/types';
import {ImagePicker} from '../../utils/ImagePicker';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/root';
import {addContact} from '../../redux/contacts/addContact/actions';

type NewContactScreenProps = {
  navigation: NewContactNavigationProp;
};

type NewContactNavigationProp = StackNavigationProp<
  RootStackParamList,
  'NewContact'
>;

export const NewContact: React.FC<NewContactScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [uri, setUri] = useState('');
  let val = Math.floor(1000 + Math.random() * 9000);
  console.log(val, 'random');
  const {
    setValue,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<AddContactPayload>({
    mode: 'onSubmit',
    defaultValues: {
      id: val,
      country_code: '',
      first_name: '',
      last_name: '',
      phone_number: '',
      contact_picture: null,
      is_favorite: false,
    },
  });

  const uploadAvatar = async () => {
    const avatar = await ImagePicker.pickSquarePhoto();
    const checkSize = avatar && ImagePicker.checkSize(avatar);
    if (!avatar) return;
    try {
      if (avatar && checkSize) {
        const photo = ImagePicker.convertForPayload(avatar);
        setUri(photo.uri);
        setValue('contact_picture', photo.uri);
      }
    } catch (error) {
      console.log(error, 'error uploadAvatar');
    }
  };

  const onSubmit = handleSubmit(data => {
    console.log(data, 'data');
    dispatch(addContact(data));
    navigation.goBack();
  });

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <TouchableOpacity style={styles.imageContainer} onPress={uploadAvatar}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzsNYiHojiPLt8z6glBg8PIw6E3ADKddJ6eg&usqp=CAU',
            }}
            resizeMode={'cover'}
            style={styles.imageUser}
            PlaceholderContent={<ActivityIndicator />}
          />
        </TouchableOpacity>

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
          name="first_name"
          rules={{
            required: {
              value: true,
              message: 'First name is Required',
            },
          }}
          defaultValue=""
        />
        {errors.first_name && (
          <Text style={styles.errorMsg}>{errors.first_name.message}</Text>
        )}
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
          rules={{
            required: {
              value: true,
              message: 'Last name is Required',
            },
          }}
          defaultValue=""
        />
        {errors.last_name && (
          <Text style={styles.errorMsg}>{errors.last_name.message}</Text>
        )}
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
          rules={{
            required: {
              value: true,
              message: 'Phone number is Required',
            },
          }}
          defaultValue=""
        />
        {errors.phone_number && (
          <Text style={styles.errorMsg}>{errors.phone_number.message}</Text>
        )}
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
          rules={{
            required: {
              value: true,
              message: 'Country code is Required',
            },
          }}
          defaultValue=""
        />
        {errors.country_code && (
          <Text style={styles.errorMsg}>{errors.country_code.message}</Text>
        )}
        <View style={styles.buttonContainer}>
          <Button style={styles.button} onPress={onSubmit}>
            Save
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

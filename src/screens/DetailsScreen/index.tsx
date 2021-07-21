import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RouteProp, useIsFocused} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {Avatar, Text, Button} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {RootStackParamList} from '../../navigation/root';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPersonContact} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';

type DetailsScreenPNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsScreen'>;

type DetailsScreenProps = {
  navigation: DetailsScreenPNavigationProp;
  route: DetailsScreenRouteProp;
};

export const DetailsScreen: React.FC<DetailsScreenProps> = ({
  navigation,
  route,
}) => {
  const id = route.params.id;
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const item = useSelector((store: Store) => store.contact.personContact);
  const {first_name, last_name, phone_number}: any = item;

  useEffect(() => {
    dispatch(fetchPersonContact(id));
  }, [id, isFocused]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', {person: item})}
        activeOpacity={0.7}
        style={{
          padding: 10,
          borderRadius: 20,
          height: 40,
          width: 40,
        }}>
        <MaterialIcons color="#8E8E8F" size={20} name="edit" />
      </TouchableOpacity>
      <View style={styles.detailsHeader}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <Text style={styles.contactName}>{last_name}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Phone</Text>
        <Text style={styles.phoneNumber}>{phone_number}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Name</Text>
        <Text>{first_name}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Email</Text>
        <Text>user@example.com</Text>
      </View>
    </View>
  );
};

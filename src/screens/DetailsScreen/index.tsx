import React, {useEffect} from 'react';
import {View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {Avatar, Text, Button} from 'react-native-elements';

import {RootStackParamList} from '../../navigation/root';
import styles from './style';
import {useDispatch, useSelector} from 'react-redux';
import {personContact} from '../../redux/contacts/actions';
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
  console.log('route.params', route.params);

  const {person} = route.params;
  const id = route.params?.id;
  console.log(id, 'id =====');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(personContact(person));
  }, [id]);
  const contact = useSelector((store: Store) => store.contact.person);

  console.log('contact person', typeof contact);
  // const {f} = contact;
  return (
    <View style={styles.container}>
      <View style={styles.detailsHeader}>
        <Avatar
          size="xlarge"
          rounded
          title="CR"
          onPress={() => console.log('Works!')}
          activeOpacity={0.7}
        />
        <Text style={styles.contactName}>{person.last_name}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Phone</Text>
        <Text style={styles.phoneNumber}>{person.phone_number}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Name</Text>
        <Text>{person.first_name}</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Email</Text>
        <Text>user@example.com</Text>
      </View>
    </View>
  );
};

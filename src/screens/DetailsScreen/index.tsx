import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {Avatar, Text, Button} from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {RootStackParamList} from '../../navigation/root';
import styles from './style';

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
  const {person} = route.params;
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Edit', {person: person})}
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

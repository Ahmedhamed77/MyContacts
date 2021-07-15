import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';
import {RootStackParamList} from '../../navigation/root';

import styles from './style';

type DetailsScreenPNavigationProp = StackNavigationProp<
  RootStackParamList,
  'DetailsScreen'
>;
type DetailsScreenProps = {
  navigation: DetailsScreenPNavigationProp;
  route: DetailsScreenPNavigationProp;
};
export const DetailsScreen: React.FC<DetailsScreenProps> = ({
  navigation,
  route,
}) => {
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
        <Text style={styles.contactName}>Contact user</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Phone</Text>
        <Text style={styles.phoneNumber}>0123456789</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Name</Text>
        <Text>0123456789</Text>
      </View>
      <View style={styles.textArea}>
        <Text style={styles.textCommon}>Email</Text>
        <Text>0123456789</Text>
      </View>
    </View>
  );
};

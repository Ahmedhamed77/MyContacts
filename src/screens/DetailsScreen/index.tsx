import React from 'react';
import {View} from 'react-native';
import {Avatar, Text} from 'react-native-elements';

import styles from './style';

export const DetailsScreen = () => {
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

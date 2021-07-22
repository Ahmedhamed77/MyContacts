import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Avatar} from 'react-native-elements';

import {styles} from './style';
import {dataPhotos} from './personPhotos';
import {useDispatch, useSelector} from 'react-redux';
import {Store} from '../../redux/store/types';
import {contact} from '../../redux/contacts/reducers';

export const FavoriteScreen = () => {
  const url = dataPhotos[Math.floor(Math.random() * dataPhotos.length)];
  const contacts = useSelector((store: Store) => store.contact.userContacts);
  const count = Object.values(contacts).filter(
    item => item.is_favorite === true,
  ).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text> {count} Favorites</Text>
      </View>
      <View>
        {contacts.map(contact => {
          return (
            contact.is_favorite && (
              <View key={contact.id}>
                <View style={styles.block}>
                  <Avatar
                    size="medium"
                    rounded
                    source={{
                      uri: url,
                    }}
                    activeOpacity={1}
                  />
                  <View style={styles.dataPerson}>
                    <Text style={styles.personName}>{contact.first_name}</Text>
                    <Text style={styles.personNumber}>
                      {contact.phone_number}
                    </Text>
                  </View>
                </View>
              </View>
            )
          );
        })}
      </View>
    </SafeAreaView>
  );
};

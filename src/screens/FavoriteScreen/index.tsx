import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {Avatar} from 'react-native-elements';

import {styles} from './style';
import {dataPhotos} from './personPhotos';

export const FavoriteScreen = () => {
  const url = dataPhotos[Math.floor(Math.random() * dataPhotos.length)];
  console.log('url is', url);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text> 0 Counter will be here</Text>
      </View>
      <View>
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
            <Text style={styles.personName}>Name</Text>
            <Text style={styles.personNumber}>Number</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

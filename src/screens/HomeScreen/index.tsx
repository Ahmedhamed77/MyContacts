import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SectionList,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, SearchBar} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';

import {Icon} from '@ui-kitten/components';
import {RootStackParamList} from '../../navigation/root';
import {fetchContactsList} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused} from '@react-navigation/native';
import {log} from 'react-native-reanimated';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useDispatch();
  const userContacts = useSelector(
    (store: Store) => store.contact.userContacts,
  );
  const isLoading = useSelector((store: Store) => store.contact.isLoading);
  const [searchValue, setSearchValue] = useState('');

  const navigationToAddNewContact = () => {
    navigation.navigate('NewContact');
  };

  const sortContacts = () => {
    let contactsArr = [];
    let aCode = 'A'.charCodeAt(0);
    for (let i = 0; i < 26; i++) {
      let currChar = String.fromCharCode(aCode + i);
      let obj = {
        title: currChar,
      };

      let currContacts = userContacts.filter(item => {
        return item.last_name[0].toUpperCase() === currChar;
      });
      if (currContacts.length > 0) {
        currContacts.sort((a, b) => a.last_name.localeCompare(b.last_name));
        obj.data = currContacts;
        contactsArr.push(obj);
      }
    }

    return contactsArr;
  };
  const dataContacts = sortContacts();
  const test = dataContacts;
  console.log(test, 'test ====');
  console.log('data', dataContacts);
  const [filterData, setFilterData] = useState(test);
  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('here');
    dispatch(fetchContactsList());
  }, [isFocused]);

  console.log('filter data', filterData);

  // FIXME: * FIXME type of onChangeText
  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <View style={styles.container}>
      <SectionList
        sections={dataContacts}
        ListHeaderComponent={
          <View style={styles.headerContacts}>
            <View style={styles.headerTitle}>
              <View
                style={{
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 9,
                  },
                  shadowOpacity: 0.5,
                  shadowRadius: 12.35,
                }}>
                <Text style={styles.headerText}>Contacts</Text>
              </View>

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={navigationToAddNewContact}>
                <Icon name="plus-outline" fill="#007AFF" style={styles.icon} />
              </TouchableOpacity>
            </View>
            <SearchBar
              returnKeyType="search"
              platform={Platform.OS === 'ios' ? 'ios' : 'android'}
              placeholder="type here .."
              value={searchValue}
              containerStyle={styles.searchBar}
              // onChangeText={text => searchFilterFunction(text)}
            />
          </View>
        }
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.row}
            onPress={() =>
              navigation.navigate('DetailsScreen', {id: item.id, person: item})
            }>
            <Text style={styles.firstName}>{item.first_name}</Text>
            <Text style={styles.lastName}>{item.last_name}</Text>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Button, Icon} from '@ui-kitten/components';
import {RootStackParamList} from '../../navigation/root';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactsList} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// TODO * FIXME vectorICons
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector((store: Store) => store.contact.userContacts);
  const updateSearch = (value: string) => {
    setSearchValue(value);
  };
  const navigationToAddNewContact = () => {
    navigation.navigate('NewContact');
  };

  contacts.map((item) => console.log(item,'item'));
  // FIXME: * FIXME type of onChangeText
  return (
    <View style={styles.container}>
      <View style={styles.headerContacts}>
        <Text style={styles.headerText}>Contacts</Text>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={navigationToAddNewContact}>
          <Icon name="plus-outline" fill="#007AFF" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View>
        <SearchBar
          returnKeyType="search"
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          placeholder="type here .."
          value={searchValue}
          containerStyle={styles.searchBar}
          onChangeText={updateSearch}
        />
      </View>
      <TouchableOpacity onPress={() => dispatch(fetchContactsList())}>
        <Text>hi </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 3,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  headerContacts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    paddingBottom: 20,
  },
  searchBar: {
    backgroundColor: 'transparent',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    margin: 2,
  },
  button: {
    margin: 2,
  },
  icon: {
    width: 35,
    height: 35,
  },
});

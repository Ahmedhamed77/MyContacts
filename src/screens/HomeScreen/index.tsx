import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SectionList,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';

import {Icon} from '@ui-kitten/components';
import {RootStackParamList} from '../../navigation/root';
import {fetchContactsList} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused} from '@react-navigation/native';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Contacts'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const {userContacts} = useSelector((store: Store) => store.contact);
  const updateSearch = (value: string) => {
    setSearchValue(value);
  };
  const navigationToAddNewContact = () => {
    navigation.navigate('NewContact');
  };

  const isFocused = useIsFocused();
  const DATA = [
    {
      title: 'A',
      data: userContacts,
    },
  ];

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [isFocused]);
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
      <SectionList
        sections={DATA}
        contentContainerStyle={styles.containerList}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.renderItemContainer}
            onPress={() =>
              navigation.navigate('DetailsScreen', {id: item.id, person: item})
            }>
            <View style={styles.containerNames}>
              <View style={styles.rowNames}>
                <Text style={styles.firstName}>
                  {item.first_name.toLocaleUpperCase()}{' '}
                </Text>
                <Text style={styles.lastName}>
                  {item.last_name.toLocaleUpperCase()}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionListHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

export default HomeScreen;

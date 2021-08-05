import React, {useCallback, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SectionList,
  FlatList,
  Animated,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, SearchBar} from 'react-native-elements';
import {StackNavigationProp} from '@react-navigation/stack';

import {Icon} from '@ui-kitten/components';
import {RootStackParamList} from '../../navigation/root';
import {
  deleteContactPerson,
  fetchContactsList,
} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {sortContacts} from '../../utils/sortContacts';
import {fetchContacts} from '../../redux/contacts/getContacts/actions';

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
    (store: Store) => store.contacts.userContacts,
  );
  const isLoading = useSelector((store: Store) => store.contacts.isLoading);
  const [searchValue, setSearchValue] = useState('');

  const navigationToAddNewContact = () => {
    navigation.navigate('NewContact');
  };

  const sortedContacts = sortContacts(userContacts);

  const [filterData, setFilterData] = useState(sortedContacts);

  const isFocused = useIsFocused();

  const searchFilter = useCallback(
    text => {
      if (text) {
        const newData = userContacts.filter(item => {
          const itemData = item.first_name
            ? item.first_name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });

        setFilterData(sortContacts(newData));
        setSearchValue(text);
      } else {
        setFilterData(sortedContacts);
        setSearchValue(text);
      }
    },
    [userContacts],
  );

  useEffect(() => {
    !userContacts.length && dispatch(fetchContacts());
    setFilterData(sortedContacts);
    // setFilterData(userContacts);
  }, [isFocused, userContacts]);

  const renderLeftActions = (progress: any, dragX: any, id: number) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });
    return (
      <TouchableOpacity
        onPress={() => dispatch(deleteContactPerson(id))}
        style={styles.delete}>
        <Animated.Text style={{transform: [{scale: scale}]}}>
          Delete
        </Animated.Text>
      </TouchableOpacity>
    );
  };
  // FIXME: * FIXME type of onChangeText
  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  ) : (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={filterData}
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
              onChangeText={text => searchFilter(text)}
            />
          </View>
        }
        renderItem={({item}) => (
          <Swipeable
            renderLeftActions={(progress, dragX) =>
              renderLeftActions(progress, dragX, item.id)
            }>
            <TouchableOpacity
              style={styles.row}
              onPress={() =>
                navigation.navigate('DetailsScreen', {
                  id: item.id,
                })
              }>
              <Text style={styles.firstName}>{item.first_name}</Text>
              <Text style={styles.lastName}>{item.last_name}</Text>
            </TouchableOpacity>
          </Swipeable>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

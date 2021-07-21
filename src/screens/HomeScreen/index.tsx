import React, {useEffect, useLayoutEffect, useState} from 'react';
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
  const {userContacts} = useSelector((store: Store) => store.contact);
  const [searchValue, setSearchValue] = useState('');
  // const [dataContacts, setDataContacts] = useState(userContacts);
  console.log('dataContacts', userContacts);

  const updateSearch = (value: string) => {
    setSearchValue(value);
  };
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
  const DATA = sortContacts();
  const [masterDataSource, setMasterDataSource] = useState(DATA);
  const [filteredDataSource, setFilteredDataSource] = useState(DATA);
  const isFocused = useIsFocused();

  useEffect(() => {
    dispatch(fetchContactsList());
  }, [isFocused, dispatch]);

  const searchFilterFunction = (text: any) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchValue(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearchValue(text);
    }
  };

  // FIXME: * FIXME type of onChangeText
  console.log(userContacts, 'filteredDataSource');
  return (
    <View style={styles.container}>
      <SectionList
        sections={filteredDataSource}
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
              onChangeText={text => searchFilterFunction(text)}
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
            <Text>{section.title}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
    // <View style={styles.container}>
    //   <View style={styles.headerContacts}>
    //     <Text style={styles.headerText}>Contacts</Text>
    //     <TouchableOpacity
    //       style={styles.iconContainer}
    //       onPress={navigationToAddNewContact}>
    //       <Icon name="plus-outline" fill="#007AFF" style={styles.icon} />
    //     </TouchableOpacity>
    //   </View>
    //   <View>
    //     <SearchBar
    //       returnKeyType="search"
    //       platform={Platform.OS === 'ios' ? 'ios' : 'android'}
    //       placeholder="type here .."
    //       value={searchValue}
    //       containerStyle={styles.searchBar}
    //       onChangeText={updateSearch}
    //     />
    //   </View>
    //   <SectionList
    //     sections={getData()}
    //     contentContainerStyle={styles.containerList}
    //     renderItem={({item}) => (
    //       <TouchableOpacity
    //         style={styles.renderItemContainer}
    //         onPress={() =>
    //           navigation.navigate('DetailsScreen', {id: item.id, person: item})
    //         }>
    //         <View style={styles.containerNames}>
    //           <View style={styles.rowNames}>
    //             <Text style={styles.firstName}>
    //               {item.first_name.toLocaleUpperCase()}{' '}
    //             </Text>
    //             <Text style={styles.lastName}>
    //               {item.last_name.toLocaleUpperCase()}
    //             </Text>
    //           </View>
    //         </View>
    //       </TouchableOpacity>
    //     )}
    //     renderSectionHeader={({section: {title}}) => (
    //       <Text style={styles.sectionListHeader}>{title}</Text>
    //     )}
    //   />
    // </View>
  );
};

export default HomeScreen;

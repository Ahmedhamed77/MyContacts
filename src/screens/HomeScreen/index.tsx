import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Platform, SectionList, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {Button, Icon} from '@ui-kitten/components';
import {RootStackParamList} from '../../navigation/root';
import {StackNavigationProp} from '@react-navigation/stack';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactsList} from '../../redux/contacts/actions';
import {Store} from '../../redux/store/types';
import {styles} from './style'
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
  const {userContacts} = useSelector((store: Store) => store.contact);
  const updateSearch = (value: string) => {
    setSearchValue(value);
  };
  const navigationToAddNewContact = () => {
    navigation.navigate('NewContact');
  };

 
const DATA = [
  {
    title: "A",
    data: userContacts,
  },
];

  useEffect(() => {
    dispatch(fetchContactsList())
  },[])
 console.log(userContacts,'contacts====')
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
       <SectionList  sections={DATA}
        renderItem={({item}) => 
        <View style={styles.renderItemContainer}>
         <View style={styles.containerNames}>
            <Text style={styles.firstName}>{item.first_name} </Text>
            <Text style={styles.lastName}>{item.last_name}</Text>
         </View>
        </View>
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionListHeader}>{title}</Text>
        )}
        />
    </View>
  );
};

export default HomeScreen;

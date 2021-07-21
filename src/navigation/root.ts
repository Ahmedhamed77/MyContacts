export type RootStackParamList = {
  Login: undefined; // undefined because you aren't passing any params to the home screen
  Register: undefined; // undefined because
  Contacts: undefined; // undefined because
  NewContact: undefined;
  DetailsScreen: {id: number};
  Favorite: undefined; // undefined because
  Edit: {person: any}; // undefined
};

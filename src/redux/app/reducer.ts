import {combineReducers} from 'redux';
import {user} from '../user/reducer';
import {contacts} from '../contacts/getContacts/reducers';
import {addNewContact} from '../contacts/addContact/reducers';

export const appReducers = combineReducers({
  user,
  contacts,
  addNewContact,
});

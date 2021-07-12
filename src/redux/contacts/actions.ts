import {getContacts} from '../../api/contacts';
import {AppThunk} from '../store/types';
import {getContactsPayload} from './../../api/contacts/types';

export const fetchContacts = (contacts: getContactsPayload[]) =>
  <const>{
    type: 'GET_CONTACTS',
    contacts,
  };

export const fetchContactsList = (): AppThunk => async dispatch => {
  console.log('inside here');
  try {
    const res = await getContacts();
    console.log(res, 'res===');
    dispatch(fetchContacts(res));
  } catch (error) {
    console.log(error, 'fetching contacts error');
  }
};

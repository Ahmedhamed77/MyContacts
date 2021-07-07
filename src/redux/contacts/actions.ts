import {getContacts} from '../../api/contacts';
import {AppThunk} from '../store/types';
import {getContactsPayload} from './../../api/contacts/types';

export const fetchContacts = (contacts: getContactsPayload) =>
  <const>{
    type: 'GET_CONTACTS',
    contacts,
  };

export const fetchContactsList =
  (contacts: getContactsPayload): AppThunk =>
  async dispatch => {
    try {
      const res = await getContacts(contacts);
      console.log(res);
    } catch (error) {
      console.log(error, 'fetching contacts error');
    }
  };

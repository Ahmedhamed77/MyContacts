import {getContacts, addNewContact} from '../../api/contacts';
import {AppThunk} from '../store/types';
import {
  AddContactPayload,
  getContactsPayload,
} from './../../api/contacts/types';

export const fetchContacts = (contacts: getContactsPayload[]) =>
  <const>{
    type: 'GET_CONTACTS',
    contacts,
  };

export const addNewContacts = (newContact: AddContactPayload) =>
  <const>{
    type: 'ADD_NEW_CONTACTS',
    newContact,
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

export const addContact =
  (payload: AddContactPayload): AppThunk =>
  async dispatch => {
    console.log('inside addContact');
    console.log(payload, 'payload===');
    try {
      const res = await addNewContact(payload);
      dispatch(addNewContacts(res));
    } catch (error: any) {
      console.log(error, 'error addNewContact');
    }
  };

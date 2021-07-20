import {
  getContacts,
  addNewContact,
  updatePersonContact,
  getPersonContact,
} from '../../api/contacts';
import {AppThunk} from '../store/types';
import {
  AddContactPayload,
  getContactsPayload,
} from './../../api/contacts/types';

export const contactsIsLoading = (status: boolean) =>
  <const>{
    type: 'CONTACTS_IS_LOADING',
    status,
  };

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

export const updateUserContact = (contactPerson: AddContactPayload) =>
  <const>{
    type: 'UPDATE_USER_CONTACT',
    contactPerson,
  };

export const fetchContact = (contactPerson: AddContactPayload) =>
  <const>{
    type: 'FETCH_CONTACT_WITH_ID',
    contactPerson,
  };
export const fetchContactsList = (): AppThunk => async dispatch => {
  console.log('inside here');
  dispatch(contactsIsLoading(true));
  try {
    const res = await getContacts();
    console.log(res, 'res===');
    dispatch(fetchContacts(res));
  } catch (error) {
    console.log(error, 'fetching contacts error');
  }
  dispatch(contactsIsLoading(false));
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

export const updateContact =
  (payload: AddContactPayload): AppThunk =>
  async dispatch => {
    dispatch(contactsIsLoading(true));
    try {
      const res = await updatePersonContact(payload);
      dispatch(updateUserContact(res));
    } catch (error: any) {
      console.log(error, 'error addNewContact');
    }
    dispatch(contactsIsLoading(false));
  };

export const fetchPersonContact =
  (id: number): AppThunk =>
  async dispatch => {
    console.log('what is id', id);
    dispatch(contactsIsLoading(true));
    try {
      const res = await getPersonContact(id);
      dispatch(fetchContact(res));
      console.log(res, 'user contact');
    } catch (error: any) {
      console.log('error fetching contact', error);
    }
    dispatch(contactsIsLoading(false));
  };

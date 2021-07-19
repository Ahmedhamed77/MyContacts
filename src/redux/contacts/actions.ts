import {
  getContacts,
  addNewContact,
  updatePersonContact,
} from '../../api/contacts';
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

export const updateUserContact = (contactPerson: AddContactPayload) =>
  <const>{
    type: 'UPDATE_USER_CONTACT',
    contactPerson,
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

export const updateContact =
  (payload: AddContactPayload): AppThunk =>
  async dispatch => {
    try {
      const res = await updatePersonContact(payload);
    } catch (error: any) {
      console.log(error, 'error addNewContact');
    }
  };
// export const fetchPersonContact =
//   (id: number): AppThunk =>
//   async dispatch => {
//     console.log('what is id', id);
//     try {
//       const res = await fetchContact(id);
//       dispatch(personContact(res));
//       console.log(res, 'user contact');
//     } catch (error: any) {
//       console.log('error fetching contact', error);
//     }
//   };

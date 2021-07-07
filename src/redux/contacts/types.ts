import {getContactsPayload} from '../../api/contacts/types';
import {fetchContacts} from './actions';

export interface ContactsReducer extends getContactsPayload {}

export type ContactsAction = ReturnType<typeof fetchContacts>;

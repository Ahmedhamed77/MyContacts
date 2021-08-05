import {addNewContacts, newContactIsLoading} from './actions';
export interface AddNewContactReducer {
  userContact: {
    id: number;
    first_name: string;
    last_name: string;
    contact_picture: string;
    is_favorite: boolean;
    country_code: string;
    phone_number: string;
  };
  isLoading: boolean;
}

export type AddNewContactAction =
  | ReturnType<typeof newContactIsLoading>
  | ReturnType<typeof addNewContacts>;

import { getUser,userIsLoading } from "./action";


export type UserAction =
  | ReturnType<typeof getUser>
  | ReturnType<typeof userIsLoading>;

export interface UserReducer extends UserType {
    isLoading: boolean,
}

export type UserType = {
    username: string,
    first_name: string,
    last_name: string,
    email: string,
}
import {User} from "../../api/contacts/types"
import { AppThunk } from "../store/types"
import { login } from "../../api/contacts"

export const userIsLoading = (state:boolean) => <const> {
    type: 'USER_IS_LOADING',
    state,
}

export const getUser = (user:User) =>
 <const>{
    type: 'GET_USER',
    user,
}


export const getUserLogin = (username:string , password:string) : AppThunk => async dispatch =>{
    console.log('iam here in getUSer');
    console.log(username,password);
    try {
        console.log('insidexs')
        const response = await login({username, password});
    
        console.log(response,'repsonse');
    } catch (error) {
        console.log(error,'====')
    }
}
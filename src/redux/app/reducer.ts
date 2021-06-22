import { combineReducers } from 'redux';
import {user} from '../user/reducer'

export const appReducers = combineReducers({
    user,
})
import {Action} from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {appReducers} from '../app/reducer';

export type Store = ReturnType<typeof appReducers>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  Store,
  unknown,
  Action<string>
>;

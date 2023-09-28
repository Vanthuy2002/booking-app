import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from '@/reducers/auth';
import languageSlice from '@/reducers/lang';

const reducer = combineReducers({
  authen: authSlice,
  languages: languageSlice,
});

const store = configureStore({
  reducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

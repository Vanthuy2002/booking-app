import { createSlice } from '@reduxjs/toolkit';

type Props = {
  user: object | null;
  accessToken: string | null;
};
const initialState: Props = {
  user: null,
  accessToken: null,
};

const authSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {
    setInfoWhenLogin: (state, action) => {
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
  },
});

export const { setInfoWhenLogin } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

type Props = {
  user: User | null;
};
const initialState: Props = {
  user: null,
};

const authSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {
    setInfoWhenLogin: (state, action) => {
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.user = null;
    },
  },
});

export const { setInfoWhenLogin, logoutUser } = authSlice.actions;
export default authSlice.reducer;

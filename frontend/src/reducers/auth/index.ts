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
  },
});

export const { setInfoWhenLogin } = authSlice.actions;
export default authSlice.reducer;

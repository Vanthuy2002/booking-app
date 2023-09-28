import { createSlice } from '@reduxjs/toolkit';

type Props = {
  lang: string;
};
const initialState: Props = {
  lang: 'vie',
};

const languageSlice = createSlice({
  name: 'languages',
  initialState,
  reducers: {
    setLanguages: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { setLanguages } = languageSlice.actions;
export default languageSlice.reducer;

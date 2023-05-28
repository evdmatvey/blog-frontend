import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Themes } from '../helpers/ChangeThemeController';
import { RootState } from '@/redux/store';

interface ThemeState {
  mode?: Themes;
}

const initialState: ThemeState = {};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Themes>) {
      state.mode = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme?.mode;

export default themeSlice.reducer;

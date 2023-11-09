import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { contentImagesSlice } from '@/features/AddContentImages';
import { themeSlice } from '@/features/ChangeTheme';
import { userSlice } from '@/entities/User';
import { tagsSlice } from '@/entities/Tag';
import { postSlice } from '@/entities/Post';

const makeStore = () =>
  configureStore({
    reducer: {
      [userSlice.name]: userSlice.reducer,
      [themeSlice.name]: themeSlice.reducer,
      [tagsSlice.name]: tagsSlice.reducer,
      [postSlice.name]: postSlice.reducer,
      [contentImagesSlice.name]: contentImagesSlice.reducer,
    },
  });

export const wrapper = createWrapper<AppStore>(makeStore);

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

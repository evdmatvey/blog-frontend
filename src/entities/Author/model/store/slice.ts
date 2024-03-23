import { HYDRATE } from 'next-redux-wrapper';
import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';
import { Author } from '../types/author';

interface AuthorsState {
  popularAuthors: Author[];
}

const initialState: AuthorsState = {
  popularAuthors: [],
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    setPopularAuthors(state, action: PayloadAction<Author[]>) {
      state.popularAuthors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return void (state.popularAuthors = action.payload.authors.popularAuthors);
    });
  },
});

export const { setPopularAuthors } = authorsSlice.actions;

export const selectPopularAuthors = (state: RootState) => state.authors.popularAuthors;

export default authorsSlice.reducer;

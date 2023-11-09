import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';

interface TagsState {
  searchQuery: string;
}

const initialState: TagsState = { searchQuery: '' };

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTagsSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setTagsSearchQuery } = tagsSlice.actions;

export const selectTagsSearchQuery = (state: RootState) => state.tags.searchQuery;

export default tagsSlice.reducer;

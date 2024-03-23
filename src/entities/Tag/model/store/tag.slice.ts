import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';
import { TagData } from '../types/TagData';
import { HYDRATE } from 'next-redux-wrapper';

interface TagsState {
  searchQuery: string;
  popularTags: TagData[];
}

const initialState: TagsState = { searchQuery: '', popularTags: [] };

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    setTagsSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
    setPopularTags(state, action) {
      state.popularTags = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return void (state.popularTags = action.payload.tags.popularTags);
    });
  },
});

export const { setTagsSearchQuery, setPopularTags } = tagsSlice.actions;

export const selectTagsSearchQuery = (state: RootState) => state.tags.searchQuery;
export const selectPopularTags = (state: RootState) => state.tags.popularTags;

export default tagsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';
import { Partial } from '@/shared/utils/partial';
import { PostPreviewData } from '../types/PostData';

type CreatePostData = Partial<Omit<PostPreviewData, '_id'>>;

interface PostState {
  posts?: [];
  createPostData: CreatePostData;
}

const initialCratePostData: CreatePostData = {
  title: '',
  desc: '',
  text: '',
  image: '',
};

const initialState: PostState = {
  createPostData: initialCratePostData,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPostTitle(state, action) {
      state.createPostData.title = action.payload;
    },

    setPostDesc(state, action) {
      state.createPostData.desc = action.payload;
    },
    setPostText(state, action) {
      state.createPostData.text = action.payload;
    },
    setPostImage(state, action) {
      state.createPostData.image = action.payload;
    },
    addPostTag(state, action) {
      const tags = state.createPostData.tags;
      state.createPostData.tags = tags ? [...tags, action.payload] : [action.payload];
    },
    removePostTag(state, action) {
      const tags = state.createPostData.tags;
      const filteredTags = tags?.filter((tag) => tag._id !== action.payload);
      state.createPostData.tags = tags ? filteredTags : [];
    },
    removePostData(state) {
      state.createPostData.title = '';
      state.createPostData.desc = '';
      state.createPostData.text = '';
      state.createPostData.image = '';
      state.createPostData.tags = [];
    },
  },
});

export const {
  addPostTag,
  removePostTag,
  removePostData,
  setPostDesc,
  setPostImage,
  setPostText,
  setPostTitle,
} = postSlice.actions;

export const selectPostTitle = (state: RootState) => state.post.createPostData.title;
export const selectPostDesc = (state: RootState) => state.post.createPostData.desc;
export const selectPostText = (state: RootState) => state.post.createPostData.text;
export const selectPostImage = (state: RootState) => state.post.createPostData.image;
export const selectPostTags = (state: RootState) => state.post.createPostData.tags;

export default postSlice.reducer;

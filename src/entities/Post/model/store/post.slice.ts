import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';
import { Partial } from '@/shared/utils/partial';
import { PostPreviewData, Posts } from '../types/PostData';
import { GetPostsVariants, PostsFilers } from '../types/PostsFilters';
import { GetPostsResponse, PostApi } from '../..';
import { AxiosError } from 'axios';

type CreatePostData = Partial<Omit<PostPreviewData, '_id'>>;

interface GetPostsData {
  variant: GetPostsVariants;
  page: number;
  limit: number;
  tagId: string;
  authorId: string;
  type: 'add' | 'set';
}

interface PostState {
  data: Posts;
  createPostData: CreatePostData;
  postsFilters: PostsFilers;
  isLoading: boolean;
}

const initialCratePostData: CreatePostData = {
  title: '',
  desc: '',
  text: '',
  image: '',
};

const initialPostsFilters: PostsFilers = {
  variant: 'basic',
  tagId: '',
  authorId: '',
};

const initialPostsData: Posts = {
  posts: [],
  page: 1,
  pages: 1,
  limit: 6,
};

const initialState: PostState = {
  createPostData: initialCratePostData,
  postsFilters: initialPostsFilters,
  data: initialPostsData,
  isLoading: false,
};

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async (getPostsData: GetPostsData) => {
    try {
      let data: GetPostsResponse;
      if (getPostsData.variant !== 'liked' && getPostsData.variant !== 'bookmarks') {
        data = await PostApi.getPosts(
          getPostsData.variant,
          getPostsData.page,
          getPostsData.limit,
          getPostsData.tagId,
          getPostsData.authorId,
        );
      } else {
        data = await PostApi.getPostsByUser(
          getPostsData.variant,
          getPostsData.page,
          getPostsData.limit,
        );
      }
      return { data, type: getPostsData.type, variant: getPostsData.variant };
    } catch (error) {
      if (error instanceof AxiosError && error.response?.status === 401) {
        throw new Error('Войдите или зарегистрируйтесь!');
      }
    }
  },
);

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
    setPosts(state, action) {
      state.data.posts = action.payload.posts;
      state.data.page = action.payload.page ?? state.data.page;
      state.data.limit = action.payload.limit ?? state.data.limit;
      state.data.pages = action.payload.pages ?? state.data.pages;
    },
    setPostsFiltersVariant(state, action) {
      state.postsFilters.variant = action.payload;
    },
    setPostsFiltersTagId(state, action) {
      state.postsFilters.tagId = action.payload;
    },
    setPostsFiltersAuthorId(state, action) {
      state.postsFilters.authorId = action.payload;
    },
    setPostsIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setInitialPagination(state) {
      state.data.page = 1;
      state.data.pages = 1;
      state.data.limit = 6;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: AnyAction) => {
      return void (state.data = action.payload.post.data);
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      if (action.payload != undefined) {
        state.postsFilters.variant = action.payload.variant;
        state.data.limit = action.payload.data.limit;
        state.data.page = action.payload.data.currentPage;
        state.data.pages = action.payload.data.pages;

        if (action.payload.type == 'set') {
          state.data.posts = action.payload.data.posts;
        } else {
          state.data.posts = [...state.data.posts, ...action.payload.data.posts];
        }
      }

      state.isLoading = false;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isLoading = false;
    });
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
  setPosts,
  setPostsFiltersAuthorId,
  setPostsFiltersTagId,
  setPostsFiltersVariant,
  setPostsIsLoading,
  setInitialPagination,
} = postSlice.actions;

export const selectPostTitle = (state: RootState) => state.post.createPostData.title;
export const selectPostDesc = (state: RootState) => state.post.createPostData.desc;
export const selectPostText = (state: RootState) => state.post.createPostData.text;
export const selectPostImage = (state: RootState) => state.post.createPostData.image;
export const selectPostTags = (state: RootState) => state.post.createPostData.tags;
export const selectPosts = (state: RootState) => state.post.data.posts;
export const selectPostsFilters = (state: RootState) => state.post.postsFilters;
export const selectPostsPagination = (state: RootState) => state.post.data;
export const selectPostsIsLoading = (state: RootState) => state.post.isLoading;

export default postSlice.reducer;

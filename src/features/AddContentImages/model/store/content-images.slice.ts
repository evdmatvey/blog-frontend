import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/redux/store';
import { ImageData } from '../types/image';

interface ContentImagesState {
  images: ImageData[];
}

const initialState: ContentImagesState = {
  images: [],
};

export const contentImagesSlice = createSlice({
  name: 'contentImages',
  initialState,
  reducers: {
    addImage(state, action: PayloadAction<ImageData>) {
      state.images = [...state.images, action.payload];
    },
    removeImage(state, action: PayloadAction<ImageData>) {
      state.images = state.images.filter((image) => image.url !== action.payload.url);
    },
    clearImages(state) {
      state.images = [];
    },
  },
});

export const { addImage, clearImages, removeImage } = contentImagesSlice.actions;

export const selectContentImages = (state: RootState) => state.contentImages.images;

export default contentImagesSlice.reducer;

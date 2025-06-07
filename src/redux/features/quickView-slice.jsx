import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    title: "",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    img: "",
    id: 0,
    images: [],
    imgs: { thumbnails: [], previews: [] },
  },
};

export const quickView = createSlice({
  name: "quickView",
  initialState,
  reducers: {
    updateQuickView: (state, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },

    resetQuickView: () => {
      return {
        value: initialState.value,
      };
    },
  },
});

export const { updateQuickView, resetQuickView } = quickView.actions;
export default quickView.reducer;

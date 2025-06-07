import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";

export const store = configureStore({
  reducer: {
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
  },
});

// No RootState or AppDispatch types in JS

// Just use useSelector directly in components
// e.g. const cartItems = useSelector(state => state.cartReducer.items);

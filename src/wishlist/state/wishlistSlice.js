import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishlist: [],
    loading: false,
  },
  reducers: {
    setSelfWishlist: (state, action) => {
      state.wishlist = action.payload
    },
    addWishlistItem: (state, action) => {
      state.wishlist.unshift(action.payload)
    },
    setWishlistLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})


export const { setSelfWishlist, addWishlistItem, setWishlistLoading } = wishlistSlice.actions
export default wishlistSlice.reducer
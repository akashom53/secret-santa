import { createSlice } from "@reduxjs/toolkit";

export const secretSantaSlice = createSlice({
  name: 'secretSanta',
  initialState: {
    wishlist: [],
    loading: false,
  },
  reducers: {
    setWishlist: (state, action) => {
      state.wishlist = action.payload
    },
    setSecretSantaLoading: (state, action) => { state.loading = action.payload }
  }
})

export const { setWishlist, setSecretSantaLoading } = secretSantaSlice.actions
export default secretSantaSlice.reducer
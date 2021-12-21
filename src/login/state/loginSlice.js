import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: null,
    user: {
      name: null,
      id: null,
    },
    giftee: {
      name: null,
      id: null,
    },
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setGiftee: (state, action) => {
      state.giftee = action.payload
    }
  }
})

export const { setToken, setUser, setGiftee } = loginSlice.actions

export default loginSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../core/loader/state/loaderSlice";
import loginReducer from "../login/state/loginSlice";
import secretSantaReducer from "../secret-santa/state/secretSantaSlice";
import wishlistReducer from "../wishlist/state/wishlistSlice";

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {}

const store = configureStore({
  reducer: {
    login: loginReducer,
    loader: loaderReducer,
    secretSanta: secretSantaReducer,
    wishlist: wishlistReducer
  },
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store
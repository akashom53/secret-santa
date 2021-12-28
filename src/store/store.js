import { configureStore } from "@reduxjs/toolkit";
import logReducer from "../core/debugLog/state/logSlice";
import loaderReducer from "../core/loader/state/loaderSlice";
import loginReducer from "../login/state/loginSlice";
import secretSantaReducer from "../secret-santa/state/secretSantaSlice";
import wishlistReducer from "../wishlist/state/wishlistSlice";

const getPersistedState = () => {
  let temp = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {}
  if (temp.loader) temp.loader.visible = false
  return temp
}

const persistedState = getPersistedState()

const store = configureStore({
  reducer: {
    login: loginReducer,
    loader: loaderReducer,
    secretSanta: secretSantaReducer,
    wishlist: wishlistReducer,
    logs: logReducer
  },
  preloadedState: persistedState
})

store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})

export default store
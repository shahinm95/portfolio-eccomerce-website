import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
// import any reducers you create below
import cartReducer from "./cartReducer";
import likedItemsReducer from "./likedItemsReducers";

const rootReducer = combineReducers({
  //add you reducers here
  cartReducer: cartReducer,
  likedItemsReducer: likedItemsReducer,
});

// Check if state exists in local storage
let persistedState = {};

if (typeof window !== "undefined") {
  // code that uses localStorage
  persistedState = localStorage.getItem("reduxState")
    ? JSON.parse(localStorage.getItem("reduxState") as string)
    : {};
}

const store = configureStore({
  reducer: rootReducer,
  // Initialize the store with loaded state
  preloadedState: persistedState,
});

//save the store's state to local storage on change
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch;

import {combineReducers} from 'redux';
import { configureStore } from "@reduxjs/toolkit";
// import any reducers you create below
import cartReducer from './cartReducer';
import likedItemsReducer from './likedItemsReducers';

const rootReducer = combineReducers({
    //add you reducers here
    cartReducer: cartReducer,
    likedItemsReducer:likedItemsReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispacth = typeof store.dispatch
import { configureStore } from "@reduxjs/toolkit";
import adminSlice from "./adminSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const persistConfig = {
  key : 'root',
  version : 1,
   storage,
}

const combinedReducers = combineReducers({
  admin : adminSlice,
  user : userSlice
})
const persistedReducer = persistReducer(persistConfig,combinedReducers);

const store = configureStore({
reducer : persistedReducer,
middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  serializableCheck: false
}),
})

export const persistor = persistStore(store);

export default store
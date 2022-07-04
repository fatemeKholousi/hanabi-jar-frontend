import { configureStore } from "@reduxjs/toolkit";
import AppLanguageSlice from "./i18n/i18n.slice";
import ProductManagement from "./productManagement.slice";

const store = configureStore({
  reducer: {
    appLanguageReducer: AppLanguageSlice.reducer,
    productReducer: ProductManagement.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

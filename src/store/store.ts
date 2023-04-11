import { configureStore, combineReducers } from "@reduxjs/toolkit";
import todos from "./todos";
import products from "./products";
const rootReducer = combineReducers({
  todos: todos.reducer,
  products: products.reducer
});

const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof rootReducer>;

export default store;

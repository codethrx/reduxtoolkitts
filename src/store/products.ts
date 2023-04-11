import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { URLS } from "../utils";

export interface Product {
  loading: boolean;
  content: Details[] | null;
  error: string;
}
export interface Details {
  id: number;
  price: number;
  title: string;
  description: string;
}

const products = createSlice({
  name: "products",
  initialState: {
    content: [],
    error: "",
    loading: false
  } as Product,
  reducers: {
    // addTodo: (state, action: PayloadAction<string>) => {
    //   state.push({ id: uuid(), message: action.payload, completed: false });
    //   return state;
    // },
    fetchProductLoading: (state, action: PayloadAction<string>) => {
      state.loading = true;
      state.error = "";
    },
    fetchProductComplete: (state, action: PayloadAction<Details[]>) => {
      state.loading = false;
      state.content = action.payload;
      state.error = "";
    },
    fetchProductError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.content = null;
      state.error = action.payload;
    }
  }
});
export const {
  fetchProductComplete,
  fetchProductError,
  fetchProductLoading
} = products.actions;
export const fetchProducts = () => async (dispatch, state) => {
  dispatch(fetchProductLoading());
  try {
    const response = await fetch(URLS.cartApiUri);
    const data = await response.json();
    dispatch(fetchProductComplete(data));
  } catch (e) {
    dispatch(fetchProductError("Error fetching data.."));
  }
};
export default products;

import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { fetchProducts } from "../store/products";
import { AppState, AppDispatch } from "../store/store";
export default function Products() {
  const state = useSelector((s: AppState) => s.products);
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (state.loading) return <h1 style={{ color: "green" }}>Loading</h1>;
  if (state.error) return <h1 style={{ color: "red" }}>Error:{state.error}</h1>;

  return (
    <div>
      <h1>Products</h1>
      {state.content.map(({ title, description, id, price }) => (
        <div key={id}>
          <p>
            {id}-{title}
            
          </p>
        </div>
      ))}
    </div>
  );
}

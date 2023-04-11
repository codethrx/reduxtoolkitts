import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import Product from "./components/Products";
import "./styles.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <TodoInput />
        <TodoList /> */}
        <Product />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);

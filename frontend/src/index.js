import React from "react";
import { createRoot } from "react-dom"; // Import createRoot
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";

const root = createRoot(document.getElementById("root")); // Use createRoot
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

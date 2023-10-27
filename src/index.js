import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ModalContextProvider from "./Context/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

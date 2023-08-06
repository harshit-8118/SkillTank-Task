import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./authContext/AuthContext";
import "./index.scss";
import { AuthContextCompanyProvider } from "./authCompany/AuthContextCompany";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextCompanyProvider>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </AuthContextCompanyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

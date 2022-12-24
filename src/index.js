import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RegionContextProvider } from "./Context/RegionContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RegionContextProvider>
      <App />
    </RegionContextProvider>
  </React.StrictMode>
);

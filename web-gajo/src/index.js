import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthContext";
import { MarkersProviders } from "./context/MarkersContex";
import IndexRouter from "./router/IndexRouter";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MarkersProviders>
      <AuthProvider>
        <IndexRouter></IndexRouter>
      </AuthProvider>
    </MarkersProviders>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

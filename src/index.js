import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { PlaylistProvider } from "./context";
import { ToastProvider } from "./context";
import { AuthProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <PlaylistProvider>
        <ToastProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </ToastProvider>
      </PlaylistProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);


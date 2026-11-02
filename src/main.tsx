import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App";
import AppProvider from "@/app/providers/AppProvider";

import "antd/dist/reset.css";
import "@/assets/styles/variables.css";
import "@/assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
);

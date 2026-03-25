import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { applySocialPreviewMeta } from "./socialPreview";
import "./styles/global.css";

applySocialPreviewMeta();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

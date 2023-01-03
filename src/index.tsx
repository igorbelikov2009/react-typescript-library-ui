import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "components";
// чтобы ошибки не было для App from "components", идём в tsconfig.json

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

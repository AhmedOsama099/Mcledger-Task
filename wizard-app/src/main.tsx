import React from "react";
import ReactDOM from "react-dom/client";
import { worker } from "./server/dev-server.tsx";
import App from "./App.tsx";

worker.start().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

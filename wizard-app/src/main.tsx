import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import store from "./store/index.tsx";
import { worker } from "./server/dev-server.tsx";
import { Provider } from "react-redux";

worker.start().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
});

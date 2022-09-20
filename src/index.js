import React from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";

import store from "./store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

AOS.init();

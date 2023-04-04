import { configureStore } from "@reduxjs/toolkit";
import chromeData from "./extData";

const store = configureStore({
  reducer: { extData: chromeData },
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const chromeData = createSlice({
  name: "data",
  initialState: { name: "", greetings: "" },
  reducers: {
    getName(state, action) {},
    updateName(state, action) {
      state.name = action.payload;
    },
    setName(state) {
      if (state.name.length > 0) {
        localStorage.setItem("name", state.name);
      }
    },
    setGreetings(state, action) {
      state.greetings = action.payload;
    },
  },
});

export const getDataActions = chromeData.actions;

export default chromeData.reducer;

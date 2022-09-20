import { createSlice } from "@reduxjs/toolkit";

const chromeData = createSlice({
  name: "data",
  initialState: {
    name: localStorage.getItem("name"),
    greetings: "",
    dateStore: [{ date: "", month: "", year: "" }],
    flag: localStorage.getItem("flag"),
  },
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
      localStorage.setItem("name", state.name);
    },
    setName(state) {
      if (state.name.length > 0) {
        localStorage.setItem("name", state.name);
      }
    },

    setFlag(state) {
      state.flag = !state.flag;
      localStorage.setItem("flag", state.flag);
    },
    setGreetings(state, action) {
      state.greetings = action.payload;
    },
    setDate(state, action) {
      const monthArr = [
        "january",
        "februray",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      state.dateStore = action.payload;
      const month = monthArr.filter(
        (month, index) => `0${index + 1}`.slice(-2) === action.payload.month
      );
      state.dateStore = {
        month: month.toString(),
        date: action.payload.date,
        year: action.payload.year,
      };
      console.log(state.dateStore);
    },
  },
});

export const getDataActions = chromeData.actions;

export default chromeData.reducer;

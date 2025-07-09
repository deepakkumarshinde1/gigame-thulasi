import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    counter: 0,
  },
  reducers: {
    updateCounter(state, action) {
      state.counter += 1;
    },
  },
});

export default CounterSlice;
export const { updateCounter } = CounterSlice.actions;

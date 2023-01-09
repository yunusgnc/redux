import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    incrament: (state) => {
      state.count += 1;
    },
    decrament: (state) => {
      state.count -= 1;
    }
  }
})

export const { incrament, decrament } = counterSlice.actions;

export default counterSlice.reducer;
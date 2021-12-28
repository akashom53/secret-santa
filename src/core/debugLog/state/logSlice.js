import { createSlice } from "@reduxjs/toolkit";

export const logSlice = createSlice({
  name: 'logs',
  initialState: { logs: [] },
  reducers: {
    log: (state, action) => {
      state.logs.push(action.payload)
    },
    clear: (state) => {
      state.logs = []
    }
  }
})

export const { log, clear } = logSlice.actions
export default logSlice.reducer
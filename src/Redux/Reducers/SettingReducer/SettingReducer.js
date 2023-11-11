import { createSlice } from "@reduxjs/toolkit";

const initiaState = {};

const SettingReducer = createSlice({
  name: "setting",
  initialState: initiaState,
  reducers: {},
});

export const {} = SettingReducer.actions;

export default SettingReducer.reducer;

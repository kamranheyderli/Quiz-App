import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type ThemeState = {
  mode: "light" | "dark";
};

const initialState: ThemeState = {
  mode: "light"
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      Cookies.set("theme", state.mode);
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
    }
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;

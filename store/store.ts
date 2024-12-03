import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice";
import themeReducer from "./features/theme/themeSlice";
import { api } from "./api/quiz";

export const store = () => {
  return configureStore({
    reducer: {
      quiz: quizReducer,
      theme: themeReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });
}

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

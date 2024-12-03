import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Subject } from "./types";
import { baseUrl } from "../consts";

export const api = createApi({
  reducerPath: "quizApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Subject"],
  endpoints: (builder) => ({
    getSubjects: builder.query<Subject[], void>({
      query: () => "/subjects",
      providesTags: ["Subject"],
    }),
  }),
});

export const { useGetSubjectsQuery } = api;

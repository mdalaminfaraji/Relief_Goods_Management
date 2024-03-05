import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => {
        console.log("from auth=>", userInfo);
        return {
          url: "/login",
          method: "POST",
          body: userInfo,
        };
      },
    }),
    register: builder.mutation({
      query: (userInfo) => {
        return {
          url: "/register",
          method: "POST",
          body: userInfo,
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;

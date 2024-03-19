import { baseApi } from "../../api/baseApi";

const volunteerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllVolunteer: builder.query({
      query: () => {
        return {
          url: "/getAllVolunteer",
          method: "GET",
        };
      },
      providesTags: ["volunteer"],
    }),
    createVolunteer: builder.mutation({
      query: (body) => {
        return {
          url: `/create-volunteer`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useCreateVolunteerMutation, useGetAllVolunteerQuery } =
  volunteerApi;

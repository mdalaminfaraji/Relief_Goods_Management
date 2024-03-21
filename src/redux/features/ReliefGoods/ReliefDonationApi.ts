import { baseApi } from "../../api/baseApi";

const ReliefDonationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDonation: builder.query({
      query: () => {
        return {
          url: "/getAllDonation",
          method: "GET",
        };
      },
      providesTags: ["reliefDonation"],
    }),
    createDonation: builder.mutation({
      query: (body) => {
        return {
          url: `/create-donation`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["reliefDonation"],
    }),
  }),
});

export const { useCreateDonationMutation, useGetAllDonationQuery } =
  ReliefDonationApi;

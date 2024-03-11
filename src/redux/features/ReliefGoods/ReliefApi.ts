import { baseApi } from "../../api/baseApi";

const ReliefApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSupply: builder.query({
      query: () => {
        return {
          url: "/getAllSupply",
          method: "GET",
        };
      },
      providesTags: ["ReliefGoods"],
    }),
    getSingleSupply: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/getSingleSupply/${id}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useGetAllSupplyQuery, useGetSingleSupplyQuery } = ReliefApi;

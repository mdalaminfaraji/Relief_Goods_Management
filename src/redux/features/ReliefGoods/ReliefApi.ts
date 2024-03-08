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
  }),
});

export const { useGetAllSupplyQuery } = ReliefApi;

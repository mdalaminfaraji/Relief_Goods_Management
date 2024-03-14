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
    createSupply: builder.mutation({
      query: (body) => {
        console.log(body);
        return {
          url: `/create-supply`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const {
  useGetAllSupplyQuery,
  useGetSingleSupplyQuery,
  useCreateSupplyMutation,
} = ReliefApi;

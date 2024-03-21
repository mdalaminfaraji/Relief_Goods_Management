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
        return {
          url: `/create-supply`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["ReliefGoods"],
    }),

    EditSupply: builder.mutation({
      query: (data) => {
        return {
          url: `/edit-supply/${data.id}`,
          method: "PUT",
          body: data.body,
        };
      },
      invalidatesTags: ["ReliefGoods"],
    }),
    deleteSupply: builder.mutation({
      query: (id) => {
        return {
          url: `/delete-supply/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["ReliefGoods"],
    }),
  }),
});

export const {
  useGetAllSupplyQuery,
  useGetSingleSupplyQuery,
  useCreateSupplyMutation,
  useDeleteSupplyMutation,
  useEditSupplyMutation,
} = ReliefApi;

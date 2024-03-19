import { baseApi } from "../../api/baseApi";

const ReliefTestimonialApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllTestimonial: builder.query({
      query: () => {
        return {
          url: "/getAllTestimonial",
          method: "GET",
        };
      },
      providesTags: ["ReliefTestimonial"],
    }),
    createTestimonial: builder.mutation({
      query: (body) => {
        return {
          url: `/create-testimonial`,
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useCreateTestimonialMutation, useGetAllTestimonialQuery } =
  ReliefTestimonialApi;

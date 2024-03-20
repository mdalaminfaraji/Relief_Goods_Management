import { baseApi } from "../../api/baseApi";

const communityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommunityPosts: builder.query({
      query: () => {
        return {
          url: "/getAllCommunityPost",
          method: "GET",
        };
      },
      providesTags: ["community"],
    }),
    createCommunityPost: builder.mutation({
      query: (body) => {
        return {
          url: `/create-communityPost`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["community"],
    }),
  }),
});

export const { useGetAllCommunityPostsQuery, useCreateCommunityPostMutation } =
  communityApi;

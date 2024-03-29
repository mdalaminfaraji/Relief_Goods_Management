import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://relief-goods-management-server.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: [
    "ReliefGoods",
    "ReliefTestimonial",
    "volunteer",
    "community",
    "reliefDonation",
  ],
});

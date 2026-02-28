import { createApi } from '@reduxjs/toolkit/query/react'

const emptyApi = createApi({
  reducerPath: 'fiatOnRampAggregatorApi',
  baseQuery: async () => ({ data: null }),
  endpoints: () => ({}),
})

export const fiatOnRampAggregatorApi = emptyApi

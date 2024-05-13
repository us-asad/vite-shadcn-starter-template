import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {storage} from '@/utils/storage'
import {RTKTagName} from '@/constants/rtk-tag-name'
import {SERVER_URL} from '@/constants/server-url'

export const baseUrl = SERVER_URL

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: headers => {
    const token = storage.getAccessToken()
    const accessToken = token?.split(' ')
    if (token) {
      headers.set('Authorization', `Bearer ${accessToken?.[1]}`)
    }
    headers.set('Accept', 'application/json')
    return headers
  },
})

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: Object.values(RTKTagName || {}),
  endpoints: () => ({}),
})

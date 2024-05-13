import {EndpointNameAuth} from '@/constants/endpoints'
import {baseApi} from '..'
import {GetUserRequest, GetUserResponse, LoginRequest, LoginResponse} from './types'
import {RTKTagName} from '@/constants/rtk-tag-name'

const AuthExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: ({body}) => ({
        url: EndpointNameAuth.LOGIN,
        method: 'POST',
        body,
      }),
      invalidatesTags: [RTKTagName.USER],
    }),

    getUser: build.query<GetUserResponse, GetUserRequest>({
      query: () => ({
        url: EndpointNameAuth.GET_USER,
        method: 'GET',
      }),
      providesTags: [RTKTagName.USER],
    }),
  }),
})

export const {useLoginMutation, useLazyGetUserQuery, useGetUserQuery} = AuthExtendedEndpoints

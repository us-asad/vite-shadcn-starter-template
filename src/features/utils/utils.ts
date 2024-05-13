import {EndpointNameUtils} from '@/constants/endpoints'
import {baseApi} from '..'
import {UploadFileRequest, UploadFileResponse} from './types'

const AuthExtendedEndpoints = baseApi.injectEndpoints({
  endpoints: build => ({
    uploadFile: build.mutation<UploadFileResponse, UploadFileRequest>({
      query: ({body}) => ({
        url: EndpointNameUtils.UPLOAD,
        method: 'POST',
        body,
      }),
    }),

  }),
})

export const {useUploadFileMutation} = AuthExtendedEndpoints

import {DefaultSuccessResponse} from '../types'

export interface UploadFileRequest {
  body: FormData
}
export interface UploadFileResponse extends DefaultSuccessResponse {
  data: string
}

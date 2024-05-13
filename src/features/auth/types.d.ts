import {User} from '@/types/user'
import {DefaultSuccessResponse} from '../types'

export interface LoginRequest {
  body: {
    email: string
    password: string
  }
}

export interface LoginResponse extends DefaultSuccessResponse {
  token: string
}

export interface GetUserRequest {}

export interface GetUserResponse extends DefaultSuccessResponse {
  data: User
}

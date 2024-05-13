import {Role} from '@/constants/role'

export interface User {
  _id: string
  firstName: string
  lastName?: string
  phoneNumber: string
  role: Role
  createdAt: Date
}

import {useGetUserQuery} from '@/features/auth'
import {User} from '@/types/user'

export const useUserData = (): User => {
  const {data: {data: user = {}} = {}} = useGetUserQuery({})

  return user as any
}

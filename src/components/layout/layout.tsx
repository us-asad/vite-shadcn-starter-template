/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import {Props} from './types'
import {useHandleError, useHandleRequest} from '@/hooks'
import {useLoginMutation} from '@/features/auth'
import {useUploadFiles} from '@/hooks/use-upload-files'

export const Layout: React.FC<Props> = ({children}) => {
  const [login] = useLoginMutation()
  const handleRequest = useHandleRequest()
  const [uploadFiles, isUploading] = useUploadFiles()

  const onLogin = async () => {
    const fileURLS = (await uploadFiles([File]))[0]
  }

  return (
    <div>
      Layout
      {children}
    </div>
  )
}

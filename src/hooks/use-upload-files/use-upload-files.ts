import {useUploadFileMutation} from '@/features/utils'
import {useState} from 'react'
import {useHandleRequest} from '..'
import {UploadFileResponse} from '@/features/utils/types'
import {UseUploadFilesReturn} from './types'

export const useUploadFiles = (): UseUploadFilesReturn => {
  const [uploadFile] = useUploadFileMutation()
  const [loading, setLoading] = useState(false)
  const handleRequest = useHandleRequest()

  const onFileUpload = async (file: File) => {
    let fileURL = ''

    await handleRequest({
      request: async () => {
        const formData = new FormData()
        formData.append('file', file)
        const result = await uploadFile({body: formData})
        return result
      },
      onSuccess: ({data}: {data: UploadFileResponse}) => {
        fileURL = data.data
      },
    })

    return fileURL
  }

  return [
    async (files: File[]) => {
      setLoading(true)
      const fileURLs = []

      for (const file of files) {
        const fileURL = await onFileUpload(file)
        fileURLs.push(fileURL)
      }

      setLoading(false)
      return fileURLs
    },
    loading,
  ]
}

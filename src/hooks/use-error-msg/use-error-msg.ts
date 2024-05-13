export const useErrorMsg = () => (error: any) =>
  typeof error === 'string'
    ? error
    : typeof error === 'object'
    ? error?.error?.msg || error?.data?.error?.msg || error?.msg || error?.[0]?.password || 'Unknown error occured'
    : 'Unknown error occured'

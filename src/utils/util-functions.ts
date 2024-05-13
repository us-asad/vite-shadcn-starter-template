import {RegisterOptions} from 'react-hook-form'

export const getFileURL = (fileID: string) => `${(import.meta as any).env.VITE_APP_SERVER_URL}/uploads/${fileID}`

export const getValidations = (
  required: boolean,
  minLength?: boolean | number,
  maxLength?: boolean | number,
  extraValidatons = {},
): RegisterOptions<any> => {
  const validations: RegisterOptions<any> = extraValidatons

  if (required) {
    validations.required = 'Please fill out the field'
  }

  if (typeof minLength === 'number') {
    validations.minLength = {
      value: minLength,
      message: `Minimum ${minLength} characters required to enter`,
    }
  }

  if (typeof maxLength === 'number') {
    validations.maxLength = {
      value: maxLength,
      message: `Maximum ${maxLength} characters allowed to enter`,
    }
  }

  return validations
}

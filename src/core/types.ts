export type TFilterForm = {
  firstName: string
  lastName: string
  topic: string
  other: string
}

export type TPhoto = {
  link: string
}

export type TLoading = {
  isLoading: boolean
  isError?: boolean
  errorMessage?: string
}

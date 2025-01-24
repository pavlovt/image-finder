import { createModel } from '@rematch/core'
import { isError } from 'lodash-es'
import { photoService, TFilterForm, TLoading, TPhoto } from '../core'
import type { RootModel } from './index'

type TUserPhoto = TFilterForm & TPhoto
type TState = { data: TUserPhoto } & TLoading

const InitialState: TState = {
  isLoading: false,
  isError: false,
  errorMessage: '',
  data: {
    firstName: '',
    lastName: '',
    topic: '',
    other: '',
    link: '',
  },
}

const photo = createModel<RootModel>()({
  state: InitialState,
  reducers: {
    setUserPhoto(state, payload: TUserPhoto) {
      return {
        ...state,
        data: payload,
      }
    },
    setLoadingState(state, payload: TLoading) {
      return {
        ...state,
        ...payload,
      }
    },
  },
  effects: (dispatch: any) => ({
    async search(data: TFilterForm) {
      try {
        dispatch({
          type: 'photo/setLoadingState',
          payload: {
            isLoading: true,
          },
        })
        const topic = data.topic === 'Other' && data.other ? data.other : data.topic
        const response: { slug: string; urls: { small: string } } = await photoService.random(topic)
        dispatch({
          type: 'photo/setLoadingState',
          payload: {
            isLoading: false,
          },
        })

        dispatch({
          type: 'photo/setUserPhoto',
          payload: {
            ...data,
            link: response.urls.small,
          },
        })
      } catch (error) {
        dispatch({
          type: 'photo/setLoadingState',
          payload: {
            isLoading: false,
            isError: true,
            errorMessage: isError(error) ? error.message : 'An error occurred',
          },
        })
      }
    },
  }),
})

export default photo

import { createModel } from '@rematch/core'
import { photoService, TFilterForm, TPhoto } from '../core'
import type { RootModel } from './index'

type TUserPhoto = TFilterForm & TPhoto
type TState = { data: TUserPhoto }

const InitialState: TState = {
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
  },
  effects: (dispatch: any) => ({
    async search(data: TFilterForm) {
      try {
        const response: { results: { slug: string; links: { download: string } }[] } = await photoService.search(
          data.topic,
        )

        dispatch({
          type: 'photo/setUserPhoto',
          payload: {
            ...data,
            link: response.results[0]?.links.download,
          },
        })
      } catch (error) {
        console.log(error)
      }
    },
  }),
})

export default photo

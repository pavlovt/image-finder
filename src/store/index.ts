import { Models, RematchDispatch, RematchRootState, init } from '@rematch/core'
import photo from './photo'
import posts from './posts'

export interface RootModel extends Models<RootModel> {
  posts: typeof posts
  photo: typeof photo
}

export const models: RootModel = {
  posts,
  photo,
}

export const store = init<RootModel>({
  models,
})

export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

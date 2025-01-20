import { TFilterForm } from '@/core/types'
import { ImageFilter } from '../components'
// import { photo } from '../core'
import { useNavigate } from 'react-router-dom'
import { store } from '../store'

function Comp() {
  const navigate = useNavigate()
  const search = async (data: TFilterForm) => {
    await store.dispatch({ type: 'photo/search', payload: data })
    navigate('/choose')
  }

  return (
    <div className="container flex flex-col items-center p-4 mx-auto mt-10">
      <h1 className="pb-5 text-2xl text-blue-400">Image Finder</h1>
      <ImageFilter filter={search} />
    </div>
  )
}

export default Comp

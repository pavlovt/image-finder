import { Button } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState, store } from '../store'

function Comp() {
  const navigate = useNavigate()
  const photoState = useSelector((rootState: RootState) => rootState.photo)

  const accept = () => {
    navigate('/final')
  }

  const reject = () => {
    store.dispatch({ type: 'photo/search', payload: photoState.data })
  }

  return (
    <div className="container flex flex-col items-center p-4 mx-auto mt-10">
      <h1 className="pb-4 text-2xl text-blue-400">Please make your choice</h1>

      {photoState.isLoading && <p data-testid="loading">Loading...</p>}
      {photoState.isError && <p data-testid="error">{photoState.errorMessage}</p>}

      <img data-testid="selected-photo" src={photoState.data.link} alt="A photo selected by topic" width={400} />

      <div className="flex gap-4 mt-4">
        <Button data-testid="accept-button" onClick={accept}>
          Accept
        </Button>
        <Button data-testid="reject-button" onClick={reject}>
          Reject
        </Button>
      </div>
    </div>
  )
}

export default Comp

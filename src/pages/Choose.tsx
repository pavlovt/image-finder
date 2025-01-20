import { Button } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { store } from '../store'

function Comp() {
  const state = store.getState()
  const navigate = useNavigate()

  const accept = () => {
    navigate('/final')
  }

  const reject = () => {
    navigate('/')
  }

  return (
    <div className="container flex flex-col items-center p-4 mx-auto mt-10">
      <h1 className="pb-4 text-2xl text-blue-400">Please make your choice</h1>

      <img data-testid="selected-photo" src={state.photo.data.link} alt="A photo selected by topic" width={400} />

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

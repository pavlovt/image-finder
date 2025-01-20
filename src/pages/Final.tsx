import { Card } from 'flowbite-react'
import { store } from '../store'

function Comp() {
  const state = store.getState()
  const getTopic = () => (state.photo.data.topic === 'Other' ? state.photo.data.other : state.photo.data.topic)
  return (
    <div className="container flex flex-col items-center p-4 mx-auto mt-10">
      <h1>
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/80/01/64/1000_F_280016442_I5DcWCRT7JTr5Ut86a9VvqNoOfDt854G.jpg"
          alt="Congratulations!"
          width={500}
        />
      </h1>

      <Card
        className="max-w-sm mt-20"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={state.photo.data.link}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Your information</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Name:</span>{' '}
          <span data-testid="card-full-name">
            {state.photo.data.firstName} {state.photo.data.lastName}
          </span>
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          <span className="font-semibold">Topic:</span> <span data-testid="card-topic">{getTopic()}</span>
        </p>
      </Card>
    </div>
  )
}

export default Comp

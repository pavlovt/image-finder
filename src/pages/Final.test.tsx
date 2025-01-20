import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import type { Store } from 'redux'
import { store } from '../store'
import Final from './Final'

const renderWithRematchStore = (ui: React.ReactElement, store: Store) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  })

test('renders page elements', () => {
  render(
    <BrowserRouter>
      <Final />
    </BrowserRouter>,
  )

  const fullName = screen.getByTestId('card-full-name')
  expect(fullName).toBeInTheDocument()
  const topic = screen.getByTestId('card-topic')
  expect(topic).toBeInTheDocument()
})

test('check that the store data is loaded', async () => {
  await store.dispatch({
    type: 'photo/setUserPhoto',
    payload: {
      firstName: 'firstName',
      lastName: 'lastName',
      topic: 'Cars',
      link: 'https://images.unsplash.com/photo-1516934024742-b461fba47600',
    },
  })

  renderWithRematchStore(
    <BrowserRouter>
      <Final />
    </BrowserRouter>,
    store,
  )

  expect(screen.getByTestId('flowbite-card-image')).toHaveAttribute(
    'src',
    'https://images.unsplash.com/photo-1516934024742-b461fba47600',
  )
  expect(screen.getByTestId('card-full-name')).toHaveTextContent('firstName lastName')
  expect(screen.getByTestId('card-topic')).toHaveTextContent('Cars')
})

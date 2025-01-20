import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import type { Store } from 'redux'
import { store } from '../store'
import Choose from './Choose'

const renderWithRematchStore = (ui: React.ReactElement, store: Store) =>
  render(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
  })

test('renders page elements', () => {
  render(
    <BrowserRouter>
      <Choose />
    </BrowserRouter>,
  )
  const photo = screen.getByTestId('selected-photo')
  expect(photo).toBeInTheDocument()
  const acceptButton = screen.getByTestId('accept-button')
  expect(acceptButton).toBeInTheDocument()
  const rejectButton = screen.getByTestId('reject-button')
  expect(rejectButton).toBeInTheDocument()
})

test('check that the store data is loaded', async () => {
  await store.dispatch({
    type: 'photo/setUserPhoto',
    payload: {
      link: 'https://images.unsplash.com/photo-1516934024742-b461fba47600',
    },
  })
  renderWithRematchStore(
    <BrowserRouter>
      <Choose />
    </BrowserRouter>,
    store,
  )

  expect(screen.getByTestId('selected-photo')).toHaveAttribute(
    'src',
    'https://images.unsplash.com/photo-1516934024742-b461fba47600',
  )
})

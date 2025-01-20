import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

test('renders form elements', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>,
  )
  const firstName = screen.getByTestId('first-name-input')
  expect(firstName).toBeInTheDocument()
  const lastName = screen.getByTestId('last-name-input')
  expect(lastName).toBeInTheDocument()
  const topic = screen.getByTestId('topic-select')
  expect(topic).toBeInTheDocument()
  const submitButton = screen.getByTestId('submit-button')
  expect(submitButton).toBeInTheDocument()
})

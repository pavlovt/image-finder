import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Choose, Final, Home } from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/choose',
    Component: Choose,
  },
  {
    path: '/final',
    Component: Final,
  },
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

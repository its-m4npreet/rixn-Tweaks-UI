import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from './components/layout/layout'
import { Home } from './components/pages/home/home'
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { 
          index: true, 
          element: <Home /> 
        },
      ],
  }])
  return (
    <RouterProvider router={router} />
  )
}

export default App


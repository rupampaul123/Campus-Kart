import Landing from './pages/landing'
import Info from './pages/info'
import Category from './pages/category'
import Login from './pages/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Register from './pages/register'
import Mylisting from './pages/mylisting'
import AddListing from './pages/addlisting'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing/>
    },
    {
    path: "/info/:id",
    element: <Info/>
    },
    {
      path:"/category/:id",
      element: <Category/>
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"/register",
      element:<Register/>
    },
    {
      path:"/mylistings/",
      element:<Mylisting/>
    },
    {
      path:"/addlisting/",
      element:<AddListing/>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

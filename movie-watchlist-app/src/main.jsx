import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },   
  {
    path: "login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

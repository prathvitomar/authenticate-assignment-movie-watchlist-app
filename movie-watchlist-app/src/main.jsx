import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import WatchList from './pages/WatchList/WatchList.jsx'
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'
import { Provider } from 'react-redux'
import store from './app/store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "watch-list",
        element: <WatchList />,
      },
      {
        path: "movie-details",
        element: <MovieDetails />,
      }
    ],
  },   
  {
    path: "login",
    element: <Login />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)

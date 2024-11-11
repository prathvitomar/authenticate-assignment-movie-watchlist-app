import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import WatchList from './pages/WatchList/WatchList.jsx'
import MovieDetails from './components/MovieDetails/MovieDetails.jsx'
import { Provider } from 'react-redux'
import store from './app/store/store.js'
import PrivateRoute from './features/ProtectedRoute/ProtectedRoute.jsx'
import History from './pages/History/History.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Navigate to="/login" />,
      },
      {
        path: 'home',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: 'watch-list',
        element: (
          <PrivateRoute>
            <WatchList />
          </PrivateRoute>
        ),
      },
      {
        path: ':movieId',
        element: (
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        ),
      },
      {
        path: 'history',
        element: (
          <PrivateRoute>
            <History />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  }
]);

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
)

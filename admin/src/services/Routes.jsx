import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import LoginForm from '../pages/Login'
import PageNotFound from '../pages/PageNotFound'
import Unauthorized from '../pages/Unauthorized'
import ProtectedRoutes from './Authentication'
import AuthorizationRoute from './Authorizarion'
import LibrarySystem from '../pages/Library'
import TransportPanel from '../pages/Transport'

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoutes> <Home /> </ProtectedRoutes>
  },
  {
    path: '/library',
    element: <ProtectedRoutes> <AuthorizationRoute roles={['admin' , 'library']}> <LibrarySystem /> </AuthorizationRoute> </ProtectedRoutes>
  },
  {
    path: '/transport',
    element: <ProtectedRoutes> <AuthorizationRoute roles={['admin' , 'library']}> <TransportPanel /> </AuthorizationRoute> </ProtectedRoutes>
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />
  }
])

export default router
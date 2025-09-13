import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import LoginForm from '../pages/Login'
import SignupForm from '../pages/SignUp'
import PageNotFound from '../pages/PageNotFound'
import AdmissionPage from '../pages/AdmissionPage'
import ProtectedRoutes from './Authentication'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <LoginForm />
  },
  {
    path: '/signUp',
    element: <SignupForm />
  },
  {
    path: '*',
    element: <PageNotFound />
  },
  {
    path: '/AdmissionForm',
    element: <ProtectedRoutes><AdmissionPage /></ProtectedRoutes>
  }
])

export default router
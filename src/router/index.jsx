import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import Dashboard from '../pages/dashboard/Dashboard';
import UploadResume from '../pages/resume/UploadResume';
import Analysis from '../pages/resume/Analysis';
import History from '../pages/dashboard/History';
import NotFound from '../pages/NotFound';
import PrivateRoute from './PrivateRoute';
import PageLayout from '../components/layout/PageLayout';
import Settings from '../pages/dashboard/Settings';

export default createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  {
    element: <PrivateRoute />,
    children: [
      { path: '/dashboard', element: <PageLayout><Dashboard /></PageLayout> },
      { path: '/upload', element: <PageLayout><UploadResume /></PageLayout> },
      { path: '/analysis/:id', element: <PageLayout><Analysis /></PageLayout> },
      { path: '/history', element: <PageLayout><History /></PageLayout> },
      { path: '/settings', element: <PageLayout><Settings /></PageLayout> },
    ],
  },
  { path: '*', element: <NotFound /> },
]);
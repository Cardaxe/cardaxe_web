import { RouteObject } from 'react-router-dom';
import Login from './modules/Authentication/components/Login';
import Register from './modules/Authentication/components/Register';
import AuthenticationLayout from './modules/Authentication/layouts/AuthenticationLayout';

const routes: RouteObject[] = [
  {
    path: 'auth',
    element: <AuthenticationLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Register />,
      },
    ],
  },
];

export default routes;

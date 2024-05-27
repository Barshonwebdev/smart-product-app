import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Homepage from './Pages/Homepage/Homepage';
import Login from './AuthenticationRoutes/Login';
import Register from './AuthenticationRoutes/Register';
import AuthProvider from './providers/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import Explore from './Pages/Explore';
import Support from './Pages/Support';
import DashboardLayout from './Layouts/DashboardLayout';
import Blogs from './Pages/Blogs';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main> ,
    children:[
      {
        path:'/',
        element:<Homepage></Homepage>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/explore',
        element:<Explore></Explore>
      },
      {
        path:'/support',
        element:<Support></Support>
      }
    ]
  },
  {
    path:'/dashboardlayout',
    element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'/dashboardlayout/dashboard',
        element:<Dashboard></Dashboard>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)

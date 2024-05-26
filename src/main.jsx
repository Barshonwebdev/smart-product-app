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
import About from './Pages/About';
import Explore from './Pages/Explore';
import Support from './Pages/Support';
import DashboardLayout from './Layouts/DashboardLayout';

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
        path:'/about',
        element:<About></About>
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
    element:<DashboardLayout></DashboardLayout>,
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

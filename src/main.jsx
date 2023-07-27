import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import AllToys from './components/AllToys/AllToys.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>, 
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signUp",
        element: <Signup></Signup>
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)

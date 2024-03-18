import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const Login = lazy(() => import('./pages/Login/Login.jsx'))
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const Auth = lazy(() => import('./helpers/Auth/Auth.jsx'))
const AddEmp = lazy(() => import('./pages/AddEmp/AddEmp.jsx'))
const delBut = lazy(() => import('./pages/delBut/delBut.jsx'))
const editBut = lazy(() => import('./pages/editBut/editBut.jsx'))

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/home',
    element: <Auth/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/home/add',
        element: <AddEmp/>
      },
      {
        path: '/home/edit/:id',
        element: <editBut/>
      },
      {
        path: '/home/del/:id',
        element: <delBut/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<p>...Loading</p>}>
    <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);

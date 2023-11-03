import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Layout1 from "../Dashboard/Layout";
import Home from "../pages/Home";
import Students from "../Dashboard/Students";
import Dhome from "../Dashboard/Dhome";
import Kurs from "../Dashboard/Courses";
import Buyurtmachilar from "../Dashboard/Orderer";
import Xizmatlar from "../Dashboard/Services";
import NotFound from "../pages/NotFound";
import Login from "../pages/auth/Login1";
console.log(localStorage.getItem("token"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <Layout1 />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/dashboard",
        element: <Dhome />,
      },
      {
        path: "/dashboard/oquvchilar",
        element: <Students />,
      },
      {
        path: "/dashboard/kurslar",
        element: <Kurs />,
      },
      {
        path: "/dashboard/buyurtmachilar",
        element: <Buyurtmachilar />,
      },
      {
        path: "/dashboard/xizmatlar",
        element: <Xizmatlar />,
      },
    ],
  },

  {
    path: "login",
    element: <Login />,
    errorElement: <NotFound />,
  },
]);

export default router;

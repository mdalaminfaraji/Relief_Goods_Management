import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ReliefDetails from "../pages/reliefs/ReliefDetails";
import ReliefGoods from "../pages/reliefs/ReliefGoods";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "relief-details/:id",
        element: <ReliefDetails />,
      },
      {
        path: "relief-goods",
        element: <ReliefGoods />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <p>I am</p>,
      },
    ],
  },
]);

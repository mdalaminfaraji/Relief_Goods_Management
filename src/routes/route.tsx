import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ReliefDetails from "../pages/reliefs/ReliefDetails";

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
    ],
  },
]);

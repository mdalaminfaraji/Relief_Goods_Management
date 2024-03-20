import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ReliefDetails from "../pages/reliefs/ReliefDetails";
import ReliefGoods from "../pages/reliefs/ReliefGoods";
import DashboardLayout from "../layout/DashboardLayout";
import CreateSupply from "../pages/dashboard/CreateSupply/CreateSupply";
import Supplies from "../pages/dashboard/Supplies/Supplies";
import DashboardChart from "../pages/dashboard/Chart/DashboardChart";
import ProtectedRoute from "./ProtectedRoute";
import CreateTestimonial from "../pages/dashboard/CreateTestimonial/CreateTestimonial";
import Volunteer from "../pages/volunteer/Volunteer";
import AboutUs from "../pages/aboutUs/AboutUs";
import Community from "../pages/community/Community";

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
      {
        path: "volunteer",
        element: <Volunteer />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "community",
        element: <Community />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardChart />,
      },
      {
        path: "create-supply",
        element: <CreateSupply />,
      },
      {
        path: "supplies",
        element: <Supplies />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
]);

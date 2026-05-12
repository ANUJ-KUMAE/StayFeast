import { createBrowserRouter } from "react-router-dom";
import { Login } from "../Pages/Login";
import { SignUp } from "../Pages/SignUp";
import { ProtectedRoutes } from "../Components/ProtectedRoute";
import { Dashboard } from "../Pages/Dashboard";

export const route = createBrowserRouter([
    {
    path: "/",
    Component: Login,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/dashboard",
    element: <ProtectedRoutes><Dashboard/></ProtectedRoutes>,
  },
])
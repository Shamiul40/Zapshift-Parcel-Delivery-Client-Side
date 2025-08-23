import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Regiser from "../Pages/Authentication/Register/Regiser";

export const router = createBrowserRouter([
  {
    path : "/",
    Component : RootLayout,
    children : [
      {
        index : true,
        Component : Home
      }
    ]
  },
  {
    path :"/",
    Component : AuthLayout,
    children :[
      {
        path : "/login",
        Component : Login
      },{
        path :"/register",
        Component : Regiser
      }
    ]
  }
])
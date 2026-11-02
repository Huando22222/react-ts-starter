import { createBrowserRouter } from "react-router";

import MainLayout from "@/components/layout/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <div>Home Page</div>,
      },
      {
        path: "users",
        element: <div>User Page</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login Page</div>,
  },
]);

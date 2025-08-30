import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/Home/Home";
import Qr from "../pages/Qr/Qr";
import History from "../pages/History/History";
import Profile from "../pages/Profile/Profile";
import Layout from "../components/layouts/Layout";

// Route config array
const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "qr", element: <Qr /> },
      { path: "history", element: <History /> },
      { path: "profile", element: <Profile /> },
    ],
  },
];

const AppRouter = createBrowserRouter(routes);

export default AppRouter;

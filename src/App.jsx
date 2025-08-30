import { RouterProvider } from "react-router-dom";
import Header from "./components/layouts/Header/Header";
import Layout from "./components/layouts/Layout";
import AppRouter from "./routes/AppRoutes";

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRoutes";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <>
      <LoadingProvider>
        <RouterProvider router={AppRouter} />
      </LoadingProvider>
    </>
  );
}

export default App;

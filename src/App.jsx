import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import DetailsPage from "./pages/DetailsPage";
import CountriesPage from "./pages/CountriesPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<HomePage />} />
        <Route path=" /details" element={<DetailsPage />} />
        <Route path="/countries" element={<CountriesPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

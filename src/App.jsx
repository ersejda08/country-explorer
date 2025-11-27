import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ExplorePage from "./pages/ExplorePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<HomePage />} />
        <Route path="/details/:cca3" element={<CountryDetailsPage />} />
        <Route path="/explore" element={<ExplorePage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;

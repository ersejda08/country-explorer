import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import DetailsPage from "./pages/DetailsPage";
import CountriesPage from "./pages/CountriesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path=" /details" element={<DetailsPage />} />
      <Route path="/countries" element={<CountriesPage />} />
      <Route path="/" element={<MainLayout />} />
    </Routes>
  );
};

export default App;

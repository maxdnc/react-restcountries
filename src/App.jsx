import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./styles/App.scss";
import MainLayout from "./components/MainLayout";
import Countries from "./components/Countries";
import CountryDetails from "./components/CountryDetails";
import { countryDetailsLoader } from "./components/CountryDetails";
import Error from "./components/Error";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/react-restcountries/" element={<MainLayout />}>
        <Route index element={<Countries />} errorElement={<Error />} />
        <Route
          path=":name"
          element={<CountryDetails />}
          loader={countryDetailsLoader}
          errorElement={<Error />}
        />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./styles/App.scss";
import MainLayout from "./components/MainLayout";
import Countries from "./components/Countries";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/react-restcountries//" element={<MainLayout />}>
        <Route index element={<Countries />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;

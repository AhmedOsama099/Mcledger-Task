import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./globalStyles";
import Market from "./pages/Market";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Market />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

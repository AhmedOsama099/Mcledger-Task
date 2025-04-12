import {
  Route,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";

import "./globalStyles";
import Market from "./pages/Market";
import Layout from "./pages/Layout";

const router = createHashRouter(
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

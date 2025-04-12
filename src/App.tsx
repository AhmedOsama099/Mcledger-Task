import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";

import "./globalStyles";
import Market from "./pages/Market";
import Layout from "./pages/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Navigate to="/market" replace />} />
      <Route index path="market" element={<Market />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

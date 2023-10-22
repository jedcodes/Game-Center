import { Route } from "react-router-dom";
import {
  DashboardScreen,
  DiscoverScreen,
  FavoriteScreen,
  StreamScreen,
} from "./pages";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<DashboardScreen />} />
      <Route path="/discover" element={<DiscoverScreen />} />
      <Route path="/stream" element={<StreamScreen />} />
      <Route path="/favorite" element={<FavoriteScreen />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

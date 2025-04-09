import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import PageNotFound from "@/pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Login />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default router;

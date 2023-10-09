import { Routes } from "react-router-dom";
import { menuRoutes } from "./routes";
import { Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProtectedRoutes from "./ProtectedRoutes";
import DashboardContainer from "../components/pages/dashboard/DashboardContainer";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {menuRoutes.map(({ id, path, Element }) => (
          <Route key={id} path={path} element={<Element />} />
        ))}
      </Route>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/dashboard" element={<DashboardContainer />} />
      </Route>
      <Route path="*" element={<h1>No existe</h1>} />
    </Routes>
  );
};

export default AppRouter;

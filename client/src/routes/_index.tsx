import { Route, Routes } from "react-router";

import { routesMapping } from "./_mapping";
import Page from "./Page";

import RequireAuthLayout from "@/layouts/RequireAuthLayout";
import RootLayout from "@/layouts/RootLayout";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route element={<RequireAuthLayout />}>
          <Route path={routesMapping.page} element={<Page />} />
        </Route>
      </Route>
    </Routes>
  );
};

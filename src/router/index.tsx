import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ROUTES, RouteNames } from "./applicationRoutes";

function ApplicationRouter(): JSX.Element {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => (
          <Route
            {...route}
            key={route.path}
            element={
              !route.isPrivate || (route.isPrivate && isLoggedIn) ? (
                route.element
              ) : (
                <Navigate to={RouteNames.WELCOME} />
              )
            }
          />
        ))}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default ApplicationRouter;

import { Routes, Route } from "react-router-dom";
import HomePage from "../container/views/HomePage";
import MainLayout from "../container/layout/MainLayout";
import Viewmovie from "../container/views/viewMovie/Viewmovie";
import ViewDetail from "../container/views//viewDetail/ViewDetail";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/:type"
        element={
          <MainLayout>
            <Viewmovie />
          </MainLayout>
        }
      >
        <Route
          path="/:type/:genre"
          element={
            <MainLayout>
              <Viewmovie />
            </MainLayout>
          }
        ></Route>
      </Route>
      <Route
        path="/detail"
        element={
          <MainLayout>
            <ViewDetail />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default Router;

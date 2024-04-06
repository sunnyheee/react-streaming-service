import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router-dom";
import HompagesPage from "./pages/Hompages/HompagesPage";
import MoviesPage from "./pages/Movies/MoviesPage";
import MovieDetailPage from "./pages/MovieDetail/MovieDetailPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<HompagesPage />} />
        <Route path="/movies">
          <Route index element={<MoviesPage />} />
          <Route path=":id" element={<MovieDetailPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;

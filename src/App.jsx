import { BrowserRouter, Routes, Route } from "react-router";
import AppRouter from "./routes/AppRouter";
import Login from "./pages/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <AppRouter />
            </ProtectedRoutes>
          }
        />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

import { BrowserRouter, Routes, Route } from "react-router";
import AppRouter from "./routes/AppRouter";
import Login from "./pages/Login";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Register from "./pages/Register";

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
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

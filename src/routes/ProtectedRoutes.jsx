import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
  const usuario = JSON.parse(localStorage.getItem("user")) || null;

  if (usuario) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;

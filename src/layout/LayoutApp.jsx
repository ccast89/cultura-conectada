import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const LayoutApp = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutApp;

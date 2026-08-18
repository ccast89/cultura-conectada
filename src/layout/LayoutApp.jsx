import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutApp = () => {
  return (
    <>
      <Navbar />
      <main className="bg-stone-100 text-stone-900 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default LayoutApp;

import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutApp = () => {
  return (
    <div className="w-full min-h-screen bg-stone-100">
      <Navbar />
      <main className="bg-stone-100 text-stone-900 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutApp;

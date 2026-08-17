import { BrowserRouter, Routes, Route } from "react-router";
import AppRouter from "./routes/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

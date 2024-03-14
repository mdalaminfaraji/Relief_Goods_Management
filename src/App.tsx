import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./components/home/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

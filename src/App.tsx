import { Outlet } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./components/home/Footer/Footer";
import { ConfigProvider, theme, Button } from "antd";
import { useState } from "react";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleClick = () => {
    setIsDarkMode((previousValue) => !previousValue);
  };
  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <Navbar handleClick={handleClick} isDarkMode={isDarkMode} />
      <Outlet />
      <Footer />
    </ConfigProvider>
  );
}

export default App;

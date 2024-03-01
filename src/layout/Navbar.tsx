import { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Link, useLocation } from "react-router-dom";

const { Header } = Layout;

const Navbar = () => {
  const isAuthenticated = false;
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleMenuClick = (e) => {
    setCurrent(e.key);
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ color: "white" }}>Brand Logo</div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleMenuClick}
      >
        <Menu.Item key="/all-relief-goods">
          <Link to="/all-relief-goods">All Relief Goods</Link>
        </Menu.Item>
        {isAuthenticated ? (
          <>
            <Menu.Item key="/dashboard">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item>
              <Button onClick={handleLogout}>Logout</Button>
            </Menu.Item>
          </>
        ) : (
          <Menu.Item>
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default Navbar;

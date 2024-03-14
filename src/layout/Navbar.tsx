/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Layout, Menu, Button, Avatar } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectCurrentUser, setUser } from "../redux/features/auth/authSlice";

const { Header } = Layout;

const Navbar = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  console.log(user);
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleMenuClick = (e: any) => {
    setCurrent(e.key);
  };

  const handleLogout = () => {
    dispatch(setUser({ user: null, token: null }));
  };

  return (
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "10px",
      }}
    >
      <div style={{ color: "white" }}>
        <Link to="/">
          {" "}
          <Avatar src="https://th.bing.com/th/id/OIP.pR744FyVUmn4iZjuDfnqHAHaHa?w=175&h=180&c=7&r=0&o=5&pid=1.7" />
        </Link>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        onClick={handleMenuClick}
      >
        <Menu.Item key="/relief-goods">
          <Link to="/relief-goods">All Relief Goods</Link>
        </Menu.Item>
        {user?.email ? (
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

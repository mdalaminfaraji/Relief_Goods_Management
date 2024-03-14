import {
  DatabaseOutlined,
  HomeOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link, NavLink, Outlet } from "react-router-dom";

const { Content, Sider } = Layout;

// const items = [
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
//   UserOutlined,
// ].map((icon, index) => ({
//   key: String(index + 1),
//   icon: React.createElement(icon),
//   label: `nav ${index + 1}`,
// }));

const items = [
  {
    key: 1,
    icon: <UploadOutlined />,
    label: <NavLink to="/dashboard/create-supply">Create Supply</NavLink>,
  },
  {
    key: 2,
    icon: <DatabaseOutlined />,
    label: <NavLink to="/dashboard/supplies">Supplies</NavLink>,
  },
  {
    key: 3,
    icon: <HomeOutlined />,
    label: <NavLink to="/">Home</NavLink>,
  },
];

const DashboardLayout = () => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" style={{ height: "100vh" }}>
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link to="/dashboard">
            <h2>Relief Goods</h2>
          </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

import { Spin } from "antd";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Spin tip="Loading..." size="large">
        <div className="content" />
      </Spin>
    </div>
  );
};

export default Loader;

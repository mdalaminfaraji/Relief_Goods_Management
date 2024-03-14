/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useRegisterMutation } from "../../redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Player } from "@lottiefiles/react-lottie-player";
const Register = () => {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    register(values);
    toast.success("register successfully done");
    navigate("/login");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{ paddingInline: "20px", maxWidth: "1080px", margin: "0 auto" }}
    >
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>Please Register</h1>
      <Divider />
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Right column for image */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            style={{ maxWidth: 400, margin: "0 auto", marginTop: 50 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            requiredMark={false}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input type="email" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{ span: 24 }}
              style={{ textAlign: "center" }}
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ marginRight: "10px" }}
              >
                Submit
              </Button>
              Or <a href="/login">Login now!</a>
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Player
            src="https://lottie.host/d562b3de-a4e3-4ec9-855a-72816f2a9bde/Q0MRYStiCi.json"
            loop
            autoplay
            style={{ height: "400px", width: "300px" }}
            speed={1}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Register;

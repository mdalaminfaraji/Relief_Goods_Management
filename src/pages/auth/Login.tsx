/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Divider, Form, Input, Row } from "antd";
import { useAppDispatch } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "../../utils/verifyToken";
import { TUser, setUser } from "../../redux/features/auth/authSlice";
import { Player } from "@lottiefiles/react-lottie-player";
const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const onFinish = async (data: any) => {
    const toastId = toast.loading("Logging in");
    console.log("Success:", data);
    try {
      const userInfo = { ...data };
      const res = await login(userInfo).unwrap();
      console.log(res);
      const user = verifyToken(res.token) as TUser;

      dispatch(setUser({ user: user, token: res?.token }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/`);
    } catch (error) {
      toast.error("something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{ paddingInline: "20px", maxWidth: "1080px", margin: "0 auto" }}
    >
      <h1 style={{ textAlign: "center", margin: "40px 0" }}>
        Please Login Now
      </h1>
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
                Login
              </Button>
              Or <a href="/register">register now!</a>
            </Form.Item>
          </Form>
        </Col>
        {/* Left column for quote */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Player
            src="https://lottie.host/404f7556-bd15-4592-8843-48f19b8ea22b/wgkq4rGrA6.json"
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

export default Login;

import { Row, Col } from "antd";

const Footer = () => {
  return (
    <footer style={{ maxWidth: "1280px", margin: "0 auto", padding: "20px" }}>
      <Row justify="center" align="middle" style={{ minHeight: "20vh" }}>
        <Col xs={24} sm={12} lg={6} xl={6} xxl={6}>
          {/* Footer column 1 content */}
          <div style={{ marginBottom: "16px" }}>
            <h3>Contact Us</h3>
            <p>Email: example@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
          {/* Footer column 2 content */}
          <div>
            <h3 style={{ textAlign: "start" }}>Social Media</h3>
            <p style={{ textAlign: "start" }}>Facebook</p>
            <p style={{ textAlign: "start" }}>Twitter</p>
            <p style={{ textAlign: "start" }}>Instagram</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
          {/* Footer column 3 content */}
          <div style={{ marginBottom: "16px", textAlign: "center" }}>
            <h3 style={{ textAlign: "start" }}>Resources</h3>
            <p style={{ textAlign: "start" }}>FAQs</p>
            <p style={{ textAlign: "start" }}>Terms of Service</p>
            <p style={{ textAlign: "start" }}>Privacy Policy</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
          {/* Footer column 4 content */}
          <div style={{ marginBottom: "16px", textAlign: "center" }}>
            <h3 style={{ textAlign: "start" }}>Support</h3>
            <p style={{ textAlign: "start" }}>Contact Form</p>
            <p style={{ textAlign: "start" }}>Help Center</p>
            <p style={{ textAlign: "start" }}>Feedback</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

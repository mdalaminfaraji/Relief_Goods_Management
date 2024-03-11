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
            <h3>Social Media</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
          {/* Footer column 3 content */}
          <div style={{ marginBottom: "16px", textAlign: "center" }}>
            <h3>Resources</h3>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={6}>
          {/* Footer column 4 content */}
          <div style={{ marginBottom: "16px", textAlign: "center" }}>
            <h3>Support</h3>
            <p>Contact Form</p>
            <p>Help Center</p>
            <p>Feedback</p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

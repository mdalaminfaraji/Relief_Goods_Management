import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import { Row, Col, Divider, Card } from "antd";

const Footer = () => {
  return (
    <Card style={{ borderRadius: "0px", border: "0px" }}>
      <div
        style={{
          maxWidth: "1280px",
          margin: "30px auto",
          paddingInline: "5px",
        }}
      >
        <Row justify="center" align="middle" style={{ minHeight: "20vh" }}>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Footer column 1 content */}
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ paddingBottom: "10px" }}>Contact Us</h3>
              <p style={{ paddingBottom: "5px" }}>
                Location:Level-2, 34, Bashindhara
              </p>
              <p style={{ paddingBottom: "5px" }}>Email: example@example.com</p>
              <p style={{ paddingBottom: "5px" }}>Phone: 123-456-7890</p>
              <p style={{ paddingBottom: "5px" }}>
                Available:Sat-Thu, 10:00AM to 7.00PM
              </p>
            </div>
          </Col>

          <Col
            xs={24}
            sm={12}
            md={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ paddingBottom: "10px" }}>Useful Links</h3>
              <p style={{ paddingBottom: "5px" }}>FAQs</p>
              <p style={{ paddingBottom: "5px" }}>Blogs</p>
              <p style={{ paddingBottom: "5px" }}>About us</p>
              <p style={{ paddingBottom: "5px" }}>Terms of Service</p>
              <p style={{ paddingBottom: "5px" }}>Privacy Policy</p>
            </div>
          </Col>
          <Col
            xs={24}
            sm={12}
            md={8}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ marginBottom: "16px" }}>
              <h3 style={{ paddingBottom: "10px" }}>Follow Us</h3>
              <p>
                <FacebookOutlined
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    paddingRight: "5px",
                    color: "#6420AA",
                  }}
                />
                <TwitterOutlined
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    paddingRight: "5px",
                    color: "#FF3EA5",
                  }}
                />
                <InstagramOutlined
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    paddingRight: "5px",
                    color: "#FF7ED4",
                  }}
                />
                <WhatsAppOutlined
                  style={{
                    fontSize: "18px",
                    borderRadius: "5px",
                    paddingRight: "5px",
                    color: "#FFB5DA",
                  }}
                />
              </p>
              <p style={{ paddingBottom: "5px" }}>Help Center</p>
              <p style={{ paddingBottom: "5px" }}>Feedback</p>
              <p style={{ paddingBottom: "5px" }}>Download Information</p>
            </div>
          </Col>
        </Row>
        <Divider>@ Relief Goods Management 2024</Divider>
      </div>
    </Card>
  );
};

export default Footer;

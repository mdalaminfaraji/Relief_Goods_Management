import { Row, Col, Card } from "antd";
import { Player } from "@lottiefiles/react-lottie-player";
const WhatWeDoSection = () => {
  return (
    <Card
      style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "10px" }}
    >
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>What We Do</h1>
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Left column for quote */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <h1 style={{ textAlign: "center", paddingBottom: "20px" }}>
            Our Mission
          </h1>
          <div
            style={{
              maxWidth: "350px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            <p style={{ marginBottom: "10px" }}>
              1. "In times of crisis, the generosity of humanity shines
              brightest. Together, we provide hope and relief to those in need."
            </p>
            <p style={{ marginBottom: "10px" }}>
              2. Every donation, big or small, makes a difference. It's not just
              about the supplies we send, but the compassion and solidarity we
              share."
            </p>
            <p style={{ marginBottom: "10px" }}>
              3."Relief goods are more than just material items; they symbolize
              compassion, resilience, and the power of community."
            </p>
            <p style={{ marginBottom: "10px" }}>
              4."Our mission is simple: to deliver aid swiftly and efficiently,
              ensuring that no one is left behind in the aftermath of disaster."
            </p>
          </div>
        </Col>
        {/* Right column for image */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Player
            src="https://lottie.host/6734d3bc-3672-4e16-8242-3927a656ef9a/WVbRShPGCE.json"
            loop
            autoplay
            style={{ height: "400px", width: "300px" }}
            speed={1}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default WhatWeDoSection;

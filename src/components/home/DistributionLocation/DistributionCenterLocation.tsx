import { Row, Col, Card } from "antd";
import { Player } from "@lottiefiles/react-lottie-player";
const DistributionCenterLocation = () => {
  return (
    <Card
      style={{ maxWidth: "1280px", margin: "20px auto", paddingInline: "10px" }}
    >
      <h1 style={{ textAlign: "center", margin: "30px 0" }}>
        Distribution Center Location
      </h1>
      <Row gutter={[16, 16]} justify="center" align="middle">
        {/* Right column for image */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Player
            src="https://lottie.host/07ca1843-a2f9-4384-88b3-71e89cb8b43c/wRTzPOYK6q.json"
            loop
            autoplay
            style={{ height: "400px", width: "300px" }}
            speed={1}
          />
        </Col>
        {/* Left column for quote */}
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <h3 style={{ paddingBottom: "20px", textAlign: "center" }}>
            Relief Goods Distribution area of Bangladesh
          </h3>
          <div
            style={{
              maxWidth: "350px",
              margin: "0 auto",
              fontSize: "16px",
            }}
          >
            <p style={{ marginBottom: "10px" }}>
              1. Dhaka City Corporation (DCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              2.Chattogram City Corporation (CCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              3.Khulna City Corporation (KCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              4.Rajshahi City Corporation (RCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              4.Barishal City Corporation (BCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              4.Sylhet City Corporation (SCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              4.Mymensingh City Corporation (MCC)
            </p>
            <p style={{ marginBottom: "10px" }}>
              4.Rangpur City Corporation (RnCC)
            </p>
            <p style={{ marginBottom: "10px" }}>4.Cox's Bazar District</p>
            <p style={{ marginBottom: "10px" }}>4.Sunamganj District</p>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default DistributionCenterLocation;

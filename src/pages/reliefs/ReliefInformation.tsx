/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Col, Image, Row } from "antd";

const ReliefInformation = ({ data }: any) => {
  return (
    <div
      style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "10px" }}
    >
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>
        Relief Goods Details Information
      </h1>
      <Row gutter={[16, 16]} justify="center" align="middle">
        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <div style={{ maxWidth: "350px", margin: "0 auto" }}>
            {" "}
            <h2 style={{ marginBottom: "15px" }}>{data?.data?.title}</h2>
            <p>
              <span style={{ fontSize: "16px", fontWeight: 500 }}>
                Category:
              </span>{" "}
              {data?.data?.category}
            </p>
            <p style={{ margin: "10px 0" }}>
              {" "}
              <span style={{ fontSize: "16px", fontWeight: 500 }}>
                Amount:
              </span>{" "}
              {data?.data?.amount}
            </p>
            <p style={{ marginBottom: "10px" }}>
              {" "}
              <span style={{ fontSize: "16px", fontWeight: 500 }}>
                Description:
              </span>{" "}
              {data?.data?.description}
            </p>
            <Button type="primary">Donate Now</Button>
          </div>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
          <Image
            width={400}
            src={data?.data?.imageUrl}
            style={{ borderRadius: "20px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ReliefInformation;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { Button, Col, Image, Modal, Row } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";

const ReliefInformation = ({ data }: any) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleDonateNow = () => {
    setIsModalVisible(true);
  };

  const handleConfirmDonate = () => {
    setIsModalVisible(false);

    window.location.href = "/dashboard";
  };

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
            <Button type="primary" onClick={handleDonateNow}>
              Donate Now
            </Button>
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
      <Modal
        title="Confirm Donation"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="confirm" type="primary" onClick={handleConfirmDonate}>
            Confirm
          </Button>,
        ]}
      >
        <Paragraph>Are you sure you want to donate to this cause?</Paragraph>
        {/* Additional user information and relief goods data can be displayed here */}
      </Modal>
    </div>
  );
};

export default ReliefInformation;

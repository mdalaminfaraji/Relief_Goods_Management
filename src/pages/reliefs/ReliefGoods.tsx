/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Row, Spin } from "antd";
import { useGetAllSupplyQuery } from "../../redux/features/ReliefGoods/ReliefApi";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import Title from "antd/es/typography/Title";
import Loader from "../../utils/Loader";

const ReliefGoods = () => {
  const { data, isLoading, isError } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>something Went Wrong.</p>;
  }
  return (
    <Card style={{ borderRadius: "0px" }}>
      <div
        style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "20px" }}
      >
        <Title style={{ textAlign: "center", marginTop: "20px" }}>
          All Relief Goods Posts
        </Title>
        <Row gutter={20}>
          {data?.data?.map((post: any) => (
            <Col key={post._id} xs={24} sm={12} md={8} lg={8} xl={8}>
              <Card
                hoverable
                style={{ width: "100%", margin: "20px 0" }}
                cover={<img alt={post.title} src={post.imageUrl} />}
              >
                <Meta
                  style={{ paddingBottom: "10px" }}
                  title={post.title}
                  description={`Category: ${post.category}`}
                />
                <p>Amount: {post.amount}</p>
                <Link to={`/relief-details/${post._id}`}>
                  {" "}
                  <Button type="primary" style={{ marginTop: "10px" }}>
                    View Detail
                  </Button>{" "}
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Card>
  );
};

export default ReliefGoods;

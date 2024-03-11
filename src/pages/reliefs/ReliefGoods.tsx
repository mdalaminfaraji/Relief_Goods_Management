/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Col, Row } from "antd";
import { useGetAllSupplyQuery } from "../../redux/features/ReliefGoods/ReliefApi";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";

const ReliefGoods = () => {
  const { data, isLoading, isError } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (isError) {
    return <p>something Went Wrong.</p>;
  }
  return (
    <div
      style={{ maxWidth: "1280px", margin: "0 auto", paddingInline: "20px" }}
    >
      <Row gutter={20}>
        {data?.data?.map((post: any) => (
          <Col key={post._id} xs={24} sm={12} md={8} lg={8} xl={8}>
            <Card
              hoverable
              style={{ width: "100%", margin: "20px 0" }}
              cover={<img alt={post.title} src={post.imageUrl} />}
            >
              <Meta
                title={post.title}
                description={`Category: ${post.category}`}
              />
              <p>Amount: {post.amount}</p>
              <Link to={`/relief-details/${post._id}`}>
                {" "}
                <Button type="primary" style={{ marginRight: "10px" }}>
                  View Detail
                </Button>{" "}
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReliefGoods;

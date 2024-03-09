import { Card, Button, Row, Col } from "antd";

const { Meta } = Card;
type ReliefCardType = {
  _id: number;
  title: string;
  category: string;
  amount: string;
  imageUrl: string;
};

type Props = {
  posts: ReliefCardType[];
};
const ReliefCards: React.FC<Props> = ({ posts }) => {
  return (
    <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
      <Row gutter={16}>
        {posts?.slice(0, 6).map((post) => (
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
              <Button type="primary" style={{ marginRight: "10px" }}>
                View Detail
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button type="primary" href="/relief-goods">
          View All
        </Button>
      </div>
    </div>
  );
};

export default ReliefCards;

import { Card, Button } from "antd";

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
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {posts?.slice(0, 6).map((post) => (
        <Card
          key={post._id}
          hoverable
          style={{ width: 300, margin: "20px 0" }}
          cover={<img alt={post.title} src={post.imageUrl} />}
        >
          <Meta title={post.title} description={`Category: ${post.category}`} />
          <p>Amount: {post.amount}</p>
          <Button type="primary" style={{ marginRight: "10px" }}>
            View Detail
          </Button>
        </Card>
      ))}
      <Button type="primary" href="/relief-goods" style={{ marginTop: "20px" }}>
        View All
      </Button>
    </div>
  );
};

export default ReliefCards;

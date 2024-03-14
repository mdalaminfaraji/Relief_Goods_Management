import Title from "antd/es/typography/Title";
import { useGetAllSupplyQuery } from "../../../redux/features/ReliefGoods/ReliefApi";
import ReliefCards from "./ReliefCards";

const CardComponent = () => {
  const {
    data: postsData,
    isLoading,
    isError,
  } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (isError) {
    return <p>something Went Wrong.</p>;
  }

  return (
    <div>
      <Title style={{ textAlign: "center", marginTop: "20px" }}>
        Relief Goods Posts
      </Title>
      <ReliefCards posts={postsData?.data} />
    </div>
  );
};

export default CardComponent;

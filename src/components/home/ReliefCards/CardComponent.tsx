import { useGetAllSupplyQuery } from "../../../redux/features/ReliefGoods/ReliefApi";
import ReliefCards from "./ReliefCards";

type ReliefCardType = {
  id: number;
  title: string;
  category: string;
  amount: string;
  imageUrl: string;
};
// const postsData: ReliefCardType[] = [
//   {
//     id: 1,
//     title: "Food Supplies",
//     category: "Food Supplies",
//     amount: "10 boxes",
//     imageUrl: "food.jpg",
//   },
//   {
//     id: 2,
//     title: "Shelter Kits",
//     category: "Shelter Kits",
//     amount: "5 kits",
//     imageUrl: "shelter.jpg",
//   },
//   // Add more posts as needed
// ];

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

  console.log(postsData);
  return (
    <div>
      <h1>Welcome to Relief Goods Page</h1>
      <ReliefCards posts={postsData?.data} />
    </div>
  );
};

export default CardComponent;

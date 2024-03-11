import { useParams } from "react-router-dom";
import { useGetSingleSupplyQuery } from "../../redux/features/ReliefGoods/ReliefApi";
import ReliefInformation from "./ReliefInformation";

const ReliefDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleSupplyQuery(id);
  if (isLoading) {
    return <p>Loading........</p>;
  }
  if (isError) {
    return <p>something went wrong... </p>;
  }
  console.log(data);
  return <ReliefInformation data={data} />;
};

export default ReliefDetails;

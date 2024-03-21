import { useParams } from "react-router-dom";
import { useGetSingleSupplyQuery } from "../../redux/features/ReliefGoods/ReliefApi";
import ReliefInformation from "./ReliefInformation";
import Loader from "../../utils/Loader";

const ReliefDetails = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetSingleSupplyQuery(id);
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <p>something went wrong... </p>;
  }

  return <ReliefInformation data={data} />;
};

export default ReliefDetails;

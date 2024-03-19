import { useGetAllVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";

const AboutUs = () => {
  const { data, isLoading, isError } = useGetAllVolunteerQuery(undefined);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something Went wrong.........</p>;
  }
  console.log(data);
  return <div>AboutUs</div>;
};

export default AboutUs;

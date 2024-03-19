import { Card, Divider, Table } from "antd";
import { useGetAllVolunteerQuery } from "../../redux/features/volunteer/volunteerApi";
import Title from "antd/es/typography/Title";

const AboutUs = () => {
  const { data, isLoading, isError } = useGetAllVolunteerQuery(undefined);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something Went wrong.........</p>;
  }
  const columns = [
    {
      title: "Image",
      dataIndex: "imageUrl",
      key: "imageUrl",
      render: (imageUrl: string | undefined) => (
        <img
          src={imageUrl}
          alt="User"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
  ];
  return (
    <Card style={{ borderRadius: "0px" }}>
      <Title style={{ textAlign: "center" }}>Our Volunteers</Title>
      <Divider>__</Divider>
      <Table
        dataSource={data?.data}
        columns={columns}
        style={{ maxWidth: "1080px", margin: "0 auto" }}
      />
    </Card>
  );
};

export default AboutUs;

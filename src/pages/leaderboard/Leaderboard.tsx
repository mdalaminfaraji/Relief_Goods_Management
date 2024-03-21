/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Divider, Layout, Table } from "antd";
import { useGetAllDonationQuery } from "../../redux/features/ReliefGoods/ReliefDonationApi";
import Title from "antd/es/typography/Title";
const { Content } = Layout;
const LeaderBoard = () => {
  const { data, isLoading, isError } = useGetAllDonationQuery(undefined);
  if (isLoading) {
    return <p>Loading......</p>;
  }

  if (isError) {
    return <p>something Went Wrong.</p>;
  }
  console.log(data);
  const columns = [
    {
      title: "Donor",
      dataIndex: "userName",
      key: "userName",
      render: (text: any, record: any) => (
        <Avatar src={record.avatar} size="small">
          {record.userName ? text.charAt(0).toUpperCase() : ""}
        </Avatar>
      ),
      align: "center" as const,
    },
    {
      title: "Donor Name",
      dataIndex: "userName",
      key: "userName",
      align: "center" as const,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      align: "center" as const,
    },
    {
      title: "Amount Donated",
      dataIndex: "amount",
      key: "amount",
      align: "center" as const,
    },
  ];
  return (
    <Layout>
      <Content>
        <Title style={{ textAlign: "center", marginTop: "40px" }}>
          Donors LeaderBoard
        </Title>
        <div style={{ maxWidth: "1080px", margin: "0 auto" }}>
          <Divider />
        </div>
        <Table
          style={{ maxWidth: "1080px", margin: "0 auto" }}
          dataSource={data.data}
          columns={columns}
        />
      </Content>
    </Layout>
  );
};

export default LeaderBoard;

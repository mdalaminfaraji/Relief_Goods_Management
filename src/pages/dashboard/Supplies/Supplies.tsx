/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetAllSupplyQuery } from "../../../redux/features/ReliefGoods/ReliefApi";
import { Table, Button, Modal } from "antd";
const Supplies = () => {
  const [selectedSupply, setSelectedSupply] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const { data, isLoading, isError } = useGetAllSupplyQuery(undefined);
  if (isLoading) {
    return <p>Loading............</p>;
  }
  if (isError) {
    return <p>something went Wrong...........</p>;
  }
  const suppliesData = data?.data;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Action",
      key: "action",
      render: (record: any) => (
        <span>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="default" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];
  const handleEdit = (record: any) => {
    setSelectedSupply(record);
    setIsEditModalVisible(true);
  };

  const handleDelete = (record: any) => {
    setSelectedSupply(record);
    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    // Logic to delete the selected supply post
    setIsDeleteModalVisible(false);
  };
  return (
    <div>
      <Table columns={columns} dataSource={suppliesData} />

      <Modal
        title="Edit Supply"
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        footer={null}
      >
        {/* Edit supply form component */}
        {/* Pass selectedSupply as prop to the form component */}
      </Modal>

      <Modal
        title="Delete Supply"
        visible={isDeleteModalVisible}
        onCancel={() => setIsDeleteModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsDeleteModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="delete" type="primary" danger onClick={confirmDelete}>
            Delete
          </Button>,
        ]}
      >
        Are you sure you want to delete "
        {selectedSupply && selectedSupply?.title}"?
      </Modal>
    </div>
  );
};

export default Supplies;

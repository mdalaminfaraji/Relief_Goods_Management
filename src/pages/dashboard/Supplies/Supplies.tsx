/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useDeleteSupplyMutation,
  useEditSupplyMutation,
  useGetAllSupplyQuery,
} from "../../../redux/features/ReliefGoods/ReliefApi";
import { Table, Button, Modal } from "antd";
import EditSupplyForm from "./EditSupplyForm";
type Supply = {
  _id: string;
  amount: string;
  category: string;
  description: string;
  imageUrl: string;
  title: string;
};
const Supplies = () => {
  const [selectedSupply, setSelectedSupply] = useState<Supply>({
    _id: "",
    amount: "",
    category: "",
    description: "",
    imageUrl: "",
    title: "",
  });
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] =
    useState<boolean>(false);
  const [editId, setEditId] = useState<string>("");
  const [deleteId, setDeleteId] = useState<string>("");
  const [editSupply] = useEditSupplyMutation();
  const [deleteSupply] = useDeleteSupplyMutation();
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
      render: (record: Supply) => (
        <span>
          <Button
            style={{ marginRight: "5px" }}
            type="primary"
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button type="default" onClick={() => handleDelete(record)}>
            Delete
          </Button>
        </span>
      ),
    },
  ];
  const handleEdit = (record: Supply) => {
    setEditId(record._id);
    setSelectedSupply(record);
    setIsEditModalVisible(true);
  };

  const handleDelete = (record: Supply) => {
    setSelectedSupply(record);
    setDeleteId(record._id);

    setIsDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    deleteSupply(deleteId);
    // Logic to delete the selected supply post
    setIsDeleteModalVisible(false);
  };
  const handleSaveEdit = (editedSupply: Supply) => {
    // Logic to update the supply post on backend
    const data = {
      body: editedSupply,
      id: editId,
    };
    editSupply(data);
    console.log(editedSupply, editId);
    setIsEditModalVisible(false);
  };
  return (
    <div>
      <Table columns={columns} dataSource={suppliesData} />

      <EditSupplyForm
        supply={selectedSupply}
        visible={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onSave={handleSaveEdit}
      />

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

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Modal, Form, Input } from "antd";

interface EditSupplyFormProps {
  supply: {
    _id: string;
    amount: string;
    category: string;
    description: string;
    imageUrl: string;
    title: string;
  };
  visible: boolean;
  onCancel: () => void;
  onSave: (values: any) => void; // Adjust the type of values according to your form data structure
}

const EditSupplyForm: React.FC<EditSupplyFormProps> = ({
  supply,
  visible,
  onCancel,
  onSave,
}) => {
  const [form] = Form.useForm();

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        onSave(values);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };

  return (
    <Modal
      title="Edit Supply"
      visible={visible}
      onCancel={onCancel}
      onOk={handleSave}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          amount: supply.amount,
          category: supply.category,
          description: supply.description,
          imageUrl: supply.imageUrl,
          title: supply.title,
        }}
      >
        <Form.Item name="amount" label="Amount">
          <Input />
        </Form.Item>
        <Form.Item name="category" label="Category">
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item name="imageUrl" label="Image URL">
          <Input />
        </Form.Item>
        <Form.Item name="title" label="Title">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditSupplyForm;

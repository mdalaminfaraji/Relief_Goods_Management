/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Select, message, Divider } from "antd";
import { useCreateSupplyMutation } from "../../../redux/features/ReliefGoods/ReliefApi";

const { Option } = Select;

interface SupplyPostFormData {
  imageUrl: string;
  category: string[];
  title: string;
  amount: number;
  description: string;
}

const CreateSupply: React.FC = () => {
  const [form] = Form.useForm();
  const [createSupply] = useCreateSupplyMutation();
  const handleSubmit = async (values: SupplyPostFormData) => {
    try {
      const postData: SupplyPostFormData = { ...values };
      const res = await createSupply(postData);
      console.log(res);

      message.success("Supply post created successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to create supply post. Please try again.");
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Relief Goods Management Form</h1>
      <Divider />
      <Form
        form={form}
        name="supply_post"
        onFinish={handleSubmit}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          name="imageUrl"
          label="Please Enter Your ImageUrl"
          rules={[{ required: true, message: "Please enter a ImageUrl" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select  category" }]}
        >
          <Select placeholder="Select categories">
            <Option value="Water">Water</Option>
            <Option value="Medical">Medical</Option>
            <Option value="Clothing">Clothing</Option>
            <Option value="Food">Food</Option>
            <Option value="Shelter">Shelter</Option>
            <Option value="Education">Education</Option>
            <Option value="Cooking">Cooking</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="amount"
          label="Amount"
          rules={[{ required: true, message: "Please enter the amount" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter a description" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateSupply;

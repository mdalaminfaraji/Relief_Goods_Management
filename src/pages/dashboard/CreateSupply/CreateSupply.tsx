/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Form, Input, Button, Select, message } from "antd";
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
      // Replace this with your actual backend endpoint
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
    <Form
      form={form}
      name="supply_post"
      onFinish={handleSubmit}
      layout="vertical"
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
        rules={[
          { required: true, message: "Please select at least one category" },
        ]}
      >
        <Select mode="multiple" placeholder="Select categories">
          <Option value="category1">Category 1</Option>
          <Option value="category2">Category 2</Option>
          <Option value="category3">Category 3</Option>
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
  );
};

export default CreateSupply;

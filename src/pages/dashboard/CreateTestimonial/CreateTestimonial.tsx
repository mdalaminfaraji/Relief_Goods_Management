import { Form, Input, Button, message, Divider, App } from "antd";
import React from "react";
import { useCreateTestimonialMutation } from "../../../redux/features/ReliefGoods/ReliefTestimonialApi";

interface CreateTestimonialFormData {
  imageUrl: string;

  title: string;
  fullName: string;
  description: string;
}

const CreateTestimonial: React.FC = () => {
  const [form] = Form.useForm();
  const [createTestimonial] = useCreateTestimonialMutation();
  const handleSubmit = async (values: CreateTestimonialFormData) => {
    try {
      const postData: CreateTestimonialFormData = { ...values };
      const res = await createTestimonial(postData);
      console.log(res);

      message.success("Supply post created successfully!");

      form.resetFields();
    } catch (error) {
      message.error("Failed to create supply post. Please try again.");
    }
  };
  return (
    <App>
      <h1 style={{ textAlign: "center" }}>User Testimonial Form</h1>
      <Divider />
      <Form
        form={form}
        name="Create-Testimonial"
        onFinish={handleSubmit}
        layout="vertical"
        requiredMark={false}
        style={{ maxWidth: 600, margin: "0 auto" }}
      >
        <Form.Item
          name="imageUrl"
          label="Please Enter Your ImageUrl"
          rules={[{ required: true, message: "Please enter a ImageUrl" }]}
        >
          <Input placeholder="Your Profile Picture " />
        </Form.Item>
        <Form.Item
          name="fullName"
          label="Please Enter Your FullName"
          rules={[{ required: true, message: "Please enter Your FullName" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please enter a title" }]}
        >
          <Input />
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
    </App>
  );
};

export default CreateTestimonial;

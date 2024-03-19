import { Form, Input, Button, message, Divider, App, Card } from "antd";
import React from "react";
import { useCreateVolunteerMutation } from "../../redux/features/volunteer/volunteerApi";
interface CreateVolunteerFormData {
  imageUrl: string;
  email: string;
  location: string;
  fullName: string;
  phoneNumber: string;
}

const Volunteer: React.FC = () => {
  const [form] = Form.useForm();
  const [createVolunteer] = useCreateVolunteerMutation();
  const handleSubmit = async (values: CreateVolunteerFormData) => {
    try {
      const postData: CreateVolunteerFormData = { ...values };
      const res = await createVolunteer(postData);

      console.log(res);

      message.success("Volunteer created successfully!");

      form.resetFields();
    } catch (error) {
      message.error("Failed to create Volunteer. Please try again.");
    }
  };
  return (
    <App>
      <Card style={{ borderRadius: "0px" }}>
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>
          Volunteer Creation Form
        </h1>
        <Divider />
        <Form
          form={form}
          name="Create-Volunteer"
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
            name="email"
            label="Enter Your Email"
            rules={[{ required: true, message: "Please enter Your Email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: "Please enter Your Location" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phoneNumber"
            label="Phone Number"
            rules={[
              { required: true, message: "Please enter Your Phone Number" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </App>
  );
};

export default Volunteer;

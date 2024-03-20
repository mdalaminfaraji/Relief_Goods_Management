/* eslint-disable @typescript-eslint/no-explicit-any */
import { Layout, Form, Input, Button, List, message } from "antd";
import {
  useCreateCommunityPostMutation,
  useGetAllCommunityPostsQuery,
} from "../../redux/features/communityPost/CommunityApi";
import Title from "antd/es/typography/Title";

const { Content } = Layout;
type FormData = {
  title: string;
  description: string;
};

const Community = () => {
  const [form] = Form.useForm();
  const [createCommunityPost] = useCreateCommunityPostMutation();
  const { data, isLoading, isError } = useGetAllCommunityPostsQuery(undefined);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  if (isError) {
    return <p>Something Went wrong.........</p>;
  }

  const posts = data.data;
  const onFinish = async (data: FormData) => {
    try {
      const res: any = await createCommunityPost(data);
      if (res?.data?.success) {
        message.success("Community Post created successfully!");
      } else {
        message.error("Failed to create Community Post. Please try again.");
      }

      form.resetFields();
    } catch (error) {
      message.error("Failed to create Community Post. Please try again.");
    }
  };
  return (
    <Layout>
      <Title style={{ textAlign: "center", marginTop: "40px" }}>
        Community Gratitude Wall
      </Title>
      <Content style={{ padding: "50px" }}>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{ maxWidth: "1080px", margin: "0 auto" }}
        >
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true }]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
        </Form>
        <List
          style={{ maxWidth: "1080px", margin: "0 auto" }}
          itemLayout="vertical"
          dataSource={posts}
          renderItem={(item: FormData) => (
            <List.Item>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default Community;

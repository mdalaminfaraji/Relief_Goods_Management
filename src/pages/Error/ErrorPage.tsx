import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Result
      status="404"
      title="Sorry, the page you visited does not exist."
      subTitle="Something Went Wrong"
      extra={
        <Button type="primary">
          <Link to="/">Back to Home</Link>
        </Button>
      }
    />
  );
};

export default ErrorPage;

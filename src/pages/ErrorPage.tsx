import React from "react";
import { Result, Button } from "antd";

const ErrorPage = (props) => {
  console.log(props)
  const ErrorConfig = {
    "403": {
      status: "403",
      title: "403",
      subTitle: "Sorry, you are not authorized to access this page.",
      extra: <Button type="primary" onClick={()=>props.history.replace('/')}>Back Home</Button>,
    },
    "404": {
      status: "404",
      title: "404",
      subTitle: "Sorry, the page you visited does not exist.",
      extra: <Button type="primary" onClick={()=>props.history.replace('/')}>Back Home</Button>,
    },
    "500": {
      status: "500",
      title: "500",
      subTitle: "Sorry, something went wrong.",
      extra: <Button type="primary" onClick={()=>props.history.replace('/')}>Back Home</Button>,
    },
  };
  const { status = "404" } = props;
  return <Result {...ErrorConfig[status]} />;
};

export default ErrorPage;

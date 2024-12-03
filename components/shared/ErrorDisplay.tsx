import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const ErrorDisplay = () => {
  return (
    <div className="text-center mt-4">
      <Title level={2} className="!text-red-500 tracking-widest italic">
        Error loading subjects
      </Title>
    </div>
  );
};

export default ErrorDisplay;

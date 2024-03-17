import React from "react";

export interface IEmploymentProps {
  name: string;
}

const Employment: React.FunctionComponent<IEmploymentProps> = ({ name }) => {
  return <div>Employment</div>;
};

export default Employment;

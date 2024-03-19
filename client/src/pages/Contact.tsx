import React from "react";

export interface IContactProps {
  name: string;
}

const Contact: React.FunctionComponent<IContactProps> = ({ name }) => {
  return <div>Estimate</div>;
};

export default Contact;

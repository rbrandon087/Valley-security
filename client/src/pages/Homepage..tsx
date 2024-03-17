import React from "react";

export interface IHomepageProps {
  name: string;
}

const Homepage: React.FunctionComponent<IHomepageProps> = ({ name }) => {
  return <div>Home</div>;
};

export default Homepage;

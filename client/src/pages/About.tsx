import React from "react";

export interface IAboutProps {
  name: string;
}

const About: React.FunctionComponent<IAboutProps> = ({ name }) => {
  return <div>About</div>;
};

export default About;

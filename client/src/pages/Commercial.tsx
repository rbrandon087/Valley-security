import React from "react";

export interface ICommercialProps {
  name: string;
}

const Commercial: React.FunctionComponent<ICommercialProps> = ({ name }) => {
  return <div>Gallery</div>;
};

export default Commercial;

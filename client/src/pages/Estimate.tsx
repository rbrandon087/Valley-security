import React from "react";

export interface IEstimateProps {
  name: string;
}

const Estimate: React.FunctionComponent<IEstimateProps> = ({ name }) => {
  return <div>Estimate</div>;
};

export default Estimate;

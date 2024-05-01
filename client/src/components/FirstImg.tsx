import React from "react";

export interface IFirstImgProps {
  name: string;
}

const FirstImg: React.FunctionComponent<IFirstImgProps> = ({ name }) => {
  return (
    <div>
      <img src={""} className="h-screen bg-cover bg-center" />
    </div>
  );
};

export default FirstImg;

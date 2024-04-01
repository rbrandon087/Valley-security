import React from "react";
import Wood from "../public/wood.jpeg";

export interface IReviewSectionProps {
  name: string;
}

const ReviewSection: React.FunctionComponent<IReviewSectionProps> = ({
  name,
}) => {
  return (
    <div className="mx-auto w-2xl px-2 sm:px-6 lg:px-0  ">
      <img src={Wood} className="mt-24"></img>
    </div>
  );
};

export default ReviewSection;

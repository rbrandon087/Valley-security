import React from "react";

export interface IReviewSectionProps {
  name: string;
}

const ReviewSection: React.FunctionComponent<IReviewSectionProps> = ({
  name,
}) => {
  return (
    <div>
      {/* Ratings bar */}
      <div className="min-h-0.5 mt-40">
        <footer className="bg-bar px-2 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl px-6 py-12 sm:flex md:items-center sm:justify-center lg:px-96 ">
            <div className="mt-8 md:order-1 md:mt-0">
              <h1 className="text-center text-3xl font-bold tracking-tight sm:text-3xl text-gray-200">
                Reviews
              </h1>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ReviewSection;

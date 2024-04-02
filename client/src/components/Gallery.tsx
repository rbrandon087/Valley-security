import React from "react";

export interface IGalleryProps {
  name: string;
}

const Gallery: React.FunctionComponent<IGalleryProps> = ({ name }) => {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

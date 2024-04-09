import React from "react";
import Skyarc from "../public/Sky-arc.jpg";

export interface IMissionProps {
  name: string;
}

const Mission: React.FunctionComponent<IMissionProps> = ({ name }) => {
  return (
    <div className="bg-white mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <section aria-labelledby="features-heading" className="relative ">
        <div className="aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
          <img
            src={Skyarc}
            alt="Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>

        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32">
          <div className="lg:col-start-2">
            <h2 id="features-heading" className="font-medium text-gray-500">
              Leatherbound Daily Journal
            </h2>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
              Our Mission
            </h2>
            <p className="mt-4 text-gray-600">
              At Silver State Flooring, our mission is to create spaces that
              welcome you home. We are committed to providing high-quality
              flooring that sets the stage for your life’s most cherished
              moments. Our dedication to craftsmanship, aesthetic excellence,
              and unparalleled customer service ensures that every floor we lay
              down is a testament to our passion for making your house feel like
              a true home. We strive to exceed expectations, one floor at a
              time, ensuring that every step you take is grounded in beauty and
              durability. Welcome to the Silver State Flooring family, where
              every floor tells a story.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;

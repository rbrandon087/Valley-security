import React from "react";

export interface IDemoProps {
  name: string;
}

const Demo: React.FunctionComponent<IDemoProps> = ({ name }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-40 gap-y-16 lg:grid-cols-2">
          <div>
            <div className="border-b border-gray-200 pb-10">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Demolition
              </h2>
            </div>

            <dl className="mt-10 space-y-10">
              <div>
                <dt className="text-sm font-medium text-gray-900"></dt>
                <dd className="mt-3 text-lg  text-gray-600">
                  <p>
                    {" "}
                    As a flooring company, our demolition services are an
                    integral part of our approach. We combine installation and
                    demolition services for a seamless client experience. Our
                    skilled team follows strict safety protocols during every
                    demolition phase. Additionally, we prioritize environmental
                    responsibility by recycling materials from demolished floors
                    and offering sustainable options. Customization is key—we
                    collaborate closely with clients to meet their unique needs.
                    As a community-oriented business, we sponsor local events
                    and share educational content on flooring trends and care.
                    Our professionalism, reliability, and transparent
                    communication set us apart. Join us in transforming spaces,
                    one floor at a time!
                  </p>
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <img
                src={""}
                alt="Black kettle with long pour spot and angled body on marble counter next to coffee mug and pour-over system."
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 sm:mt-6 sm:gap-6 lg:mt-8 lg:gap-8">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={""}
                  alt="Detail of temperature setting button on kettle bass with digital degree readout."
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={""}
                  alt="Kettle spout pouring boiling water into coffee grounds in pour-over mug."
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;

import React from "react";

export interface ICallButtonProps {
  name: string;
}

const CallButton: React.FunctionComponent<ICallButtonProps> = ({ name }) => {
  return (
    <div>
      <div className="flex md:absolute right-6">
        <div className="flex flex-shrink- items-center">
          <a
            href="tel:702-371-9920"
            className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-bar"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallButton;

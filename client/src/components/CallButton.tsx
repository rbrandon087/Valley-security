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
            className="bg-bar hover:bg-grey text-white font-bold py-2 px-4 rounded-full"
          >
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallButton;

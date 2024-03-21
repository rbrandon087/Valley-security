import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export interface IFooterProps {
  name: string;
}

const navigation = {
  social: [
    { name: "Twitter", href: "https://twitter.com", icon: FaTwitter },
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebook },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  ],
};

const Footer: React.FunctionComponent<IFooterProps> = ({ name }) => {
  return (
    <div>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
          <div className="mt-10 flex justify-center space-x-10">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-5 text-gray-500">
            &copy; 2020 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

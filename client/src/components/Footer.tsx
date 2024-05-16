import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

export interface IFooterProps {
  name: string;
}

const navigation = {
  social: [
    {
      name: "TikTok",
      href: "https://msuspartans.com/sports/mens-basketball",
      icon: FaTiktok,
    },
    {
      name: "Facebook",
      href: "https://www.steelers.com/",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.detroitlions.com/",
      icon: FaInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/brannzavaleta11/",
      icon: FaLinkedinIn,
    },
  ],
};

const Footer: React.FunctionComponent<IFooterProps> = ({ name }) => {
  return (
    <div className="min-h-0.5">
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-red-900" />
        </div>
        <div className="relative flex justify-center"></div>
      </div>
      <footer className="bg-gray-900 px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 ">
          <div className=" space-x-6 md:order-2 md:mt-0 w-full flex items-center justify-center">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-200"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <div className="mt-8 md:order-1 md:mt-0 flex items-center justify-center">
            <p className="text-center text-xs leading-5 text-gray-200">
              &copy; Brandon Zavaleta
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

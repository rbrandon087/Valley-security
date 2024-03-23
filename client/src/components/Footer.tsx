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
      href: "https://www.tiktok.com/@silverstateflooring?_t=8kvTEHKKDpS&_r=1",
      icon: FaTiktok,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/silverstateflooring?mibextid=ZbWKwL",
      icon: FaFacebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/silverstateflooring?igsh=czR5cWZpMjBzdW5x",
      icon: FaInstagram,
    },
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
            &copy; 2018 Silver State Flooring, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

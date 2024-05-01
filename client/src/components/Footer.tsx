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
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/silver-state-flooring-llc/about/",
      icon: FaLinkedinIn,
    },
  ],
};

const Footer: React.FunctionComponent<IFooterProps> = ({ name }) => {
  return (
    <div className="min-h-0.5">
      <footer className="bg-bar px-2 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 ">
          <div className="flex justify-center space-x-6 md:order-2 ">
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
          <div className="mt-8 md:order-1 md:mt-0">
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

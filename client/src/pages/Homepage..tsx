import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Patrol from "../assets/security-patrol.jpg";

export interface IHomepageProps {
  name: string;
  description: string;
}

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

const benefits = [
  "Competitive salaries",
  "Flexible work hours",
  "30 days of paid vacation",
  "Annual team retreats",
  "Benefits for you and your family",
  "A great work environment",
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Homepage: React.FunctionComponent<IHomepageProps> = ({ name }) => {
  return (
    <div>
      <div className="bg-gray-900">
        <div className="relative bg-gray-900">
          {/* Decorative image and overlay */}
          <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
            <img
              src={Patrol}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gray-900 opacity-50"
          />

          {/* Page opener */}

          <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center sm:py-64 lg:px-0">
            <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
              New arrivals are here
            </h1>
            <p className="mt-4 text-xl text-white">
              At Valley Security, we're committed to protecting what matters
              most. With our team of dedicated security professionals, we
              provide tailored security solutions for your peace of mind. From
              safeguarding premises to ensuring asset and personnel safety,
              trust us to be your security partner. Discover the difference with
              Valley Security today.
            </p>
          </div>
        </div>

        <main>
          {/* Category section */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8 ">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                From the blog
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
                >
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

                  <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                    <time dateTime={post.datetime} className="mr-8">
                      {post.date}
                    </time>
                    <div className="-ml-4 flex items-center gap-x-4">
                      <svg
                        viewBox="0 0 2 2"
                        className="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50"
                      >
                        <circle cx={1} cy={1} r={1} />
                      </svg>
                      <div className="flex gap-x-2.5">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-6 w-6 flex-none rounded-full bg-white/10"
                        />
                        {post.author.name}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 px-4 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          {/* Featured section */}
          <section
            aria-labelledby="social-impact-heading"
            className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 sm:pt-32 lg:px-8"
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2
                    id="social-impact-heading"
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                    <span className="block sm:inline">Level up</span>
                    <span className="block sm:inline">your desk</span>
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Make your desk beautiful and organized. Post a picture to
                    social media and watch it get more likes than life-changing
                    announcements. Reflect on the shallow nature of existence.
                    At least you have a really nice desk setup.
                  </p>
                  <a
                    href="#"
                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Shop Workspace
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Join our team section */}
          <div className="bg-gray-900 py-24 sm:py-32 mt-0">
            <div className="relative isolate">
              <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
                  <img
                    className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                    src="https://images.unsplash.com/photo-1519338381761-c7523edc1f46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                    alt=""
                  />
                  <div className="w-full flex-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Join our team
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      Lorem ipsum dolor sit amet consect adipisicing elit.
                      Possimus magnam voluptatum cupiditate veritatis in
                      accusamus quisquam.
                    </p>
                    <ul
                      role="list"
                      className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                    >
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-x-3">
                          <CheckCircleIcon
                            className="h-7 w-5 flex-none"
                            aria-hidden="true"
                          />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10 flex">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-indigo-400"
                      >
                        See our job postings{" "}
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
                  style={{
                    clipPath:
                      "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Featured section */}
          <section
            aria-labelledby="comfort-heading"
            className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
          >
            <div className="relative overflow-hidden rounded-lg">
              <div className="absolute inset-0">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-02.jpg"
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
                <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                  <h2
                    id="comfort-heading"
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                  >
                    Simple productivity
                  </h2>
                  <p className="mt-3 text-xl text-white">
                    Endless tasks, limited hours, a single piece of paper. Not
                    really a haiku, but we're doing our best here. No kanban
                    boards, burndown charts, or tangled flowcharts with our
                    Focus system. Just the undeniable urge to fill empty
                    circles.
                  </p>
                  <a
                    href="#"
                    className="mt-8 block w-full rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100 sm:w-auto"
                  >
                    Shop Focus
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* Footer section */}
        <footer aria-labelledby="footer-heading" className="bg-gray-900">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-white">Shop</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.shop.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Company</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.company.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                  <div>
                    <h3 className="text-sm font-medium text-white">Account</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.account.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-white">Connect</h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {footerNavigation.connect.map((item) => (
                        <li key={item.name} className="text-sm">
                          <a
                            href={item.href}
                            className="text-gray-300 hover:text-white"
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="mt-12 md:mt-16 xl:mt-0">
                <h3 className="text-sm font-medium text-white">
                  Sign up for our newsletter
                </h3>
                <p className="mt-6 text-sm text-gray-300">
                  The latest deals and savings, sent to your inbox weekly.
                </p>
                <form className="mt-2 flex sm:max-w-md">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    type="text"
                    autoComplete="email"
                    required
                    className="w-full min-w-0 appearance-none rounded-md border border-white bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
                  />
                  <div className="ml-4 flex-shrink-0">
                    <button
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="border-t border-gray-800 py-10">
              <p className="text-sm text-gray-400">
                Copyright &copy; 2021 Your Company, Inc.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;

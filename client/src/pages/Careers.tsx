import React, { ChangeEvent, Children, FormEvent, useState } from "react";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { doc } from "prettier";

export interface ICareersProps {
  name: string;
}
type FormFields = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  phoneNumber: string;
  resume: File;
};

const Careers: React.FunctionComponent<ICareersProps> = ({ name }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
  };

  return (
    <div className="relative isolate bg-white mt-8 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 right-0 -z-10 w-full  ">
              <svg
                className="absolute inset-0 h-full w-full stroke-bar [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] opacity-50"
                aria-hidden="true"
              >
                <svg x="100%" y={-1} className="overflow-visible fill-white">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
                />
              </svg>
              <div
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
                aria-hidden="true"
              >
                <div
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-50"
                  style={{
                    clipPath:
                      "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                  }}
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-black">
              Join Our Flooring Family: Where Growth Meets Passion
            </h2>
            <p className="mt-6 text-lg leading-8 text-black">
              At Silver State Flooring, we’re more than just a workplace; we’re
              a community of dedicated professionals who share a common love for
              craftsmanship, innovation, and excellence. Our collaborative
              culture fosters creativity, and our commitment to quality
              craftsmanship leaves a lasting impact. Whether you’re a seasoned
              pro or just starting out, there’s always room to learn and evolve.
              Join us, and together, we’ll elevate the flooring industry, one
              step at a time. Ready to make your mark? Explore our open
              positions and let’s build a beautiful future together!
            </p>
            {/*Address Info */}
            <dl className="mt-10 space-y-4 text-base leading-7 text-black">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                </dt>

                <dd>Las Vegas, NV 89134</dd>
              </div>

              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon
                    className="h-7 w-6 text-black"
                    aria-hidden="true"
                  />
                </dt>
                <dd>
                  <a className="hover:text-bar" href="mailto:hello@example.com">
                    howcanwehelp@silverstateflooring.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        {/* Form submit */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          action="#"
          method="POST"
          className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    type="text"
                    name="firstName"
                    id="first-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-bar sm:text-sm sm:leading-6"
                  />
                  {errors.firstName && (
                    <div className="text-red-500">
                      {errors.firstName.message}
                    </div>
                  )}
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    type="text"
                    name="lastName"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-bar sm:text-sm sm:leading-6"
                  />
                  {errors.lastName && (
                    <div className="text-red-500">
                      {errors.lastName.message}
                    </div>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("email", {
                      required: "Email is required",
                      validate: (value) => value.includes("@"),
                    })}
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-bar sm:text-sm sm:leading-6"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email.message}</div>
                  )}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-semibold leading-6 text-black"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                    })}
                    type="tel"
                    name="phoneNumber"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-bar sm:text-sm sm:leading-6"
                  />
                  {errors.phoneNumber && (
                    <div className="text-red-500">
                      {errors.phoneNumber.message}
                    </div>
                  )}
                </div>
              </div>
              {/* Resume */}
              <div className="mt-2 flex justify-center rounded-lg border  border-black px-6 py-10 sm:col-span-2">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-black"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent border font-semibold text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-bar"
                    >
                      <span>Upload a file</span>
                      <input
                        {...register("resume", { required: "Resume needed" })}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                    </label>
                    <p className="pl-1 text-black">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-black">
                    PNG, JPG, GIF up to 10MB
                  </p>
                  {errors.resume && (
                    <div className="text-red-500">{errors.resume.message}</div>
                  )}
                </div>
              </div>
              {/* Message form */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    {...register("message")}
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-grey/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-black focus:ring-2 focus:ring-inset focus:ring-bar sm:text-sm sm:leading-6"
                    defaultValue={""}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="bg-bar hover:bg-grey text-white font-bold py-2 px-4 rounded-full"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;

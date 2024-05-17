import React, { useState, useEffect } from "react";
import axios from "axios";
import { createClient } from "@supabase/supabase-js";
import { Resolver, SubmitHandler, useForm } from "react-hook-form";

import { doc } from "prettier";

export interface ICareersProps {
  name: string;
}
type FormFields = {
  firstName: string;
  lastName: string;
  message: string;
  email: string;
  phone_number: string;
  resume: File;
};

const Careers: React.FunctionComponent<ICareersProps> = ({ name }) => {
  const [data, setData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/api/careers");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (formData: FormFields) => {
    try {
      const response = await fetch("/api/careers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle success
        alert("Form submitted");
      } else {
        // Handle error
        alert("Error submitting data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="relative bg-gray-900 mt-0 flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-xl lg:max-w-lg">
        {/* Form submit */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          action="/api/careers"
          method="POST"
          className="mt-8 bg-grey-900 p-6 rounded-lg shadow-md"
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-white"
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
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.firstName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.firstName.message}
                  </div>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-white"
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
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.lastName && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.lastName.message}
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  {...register("email", {
                    required: "Email is required",
                    validate: (value) => {
                      if (!value.includes("@")) {
                        return "Email is required";
                      }
                      return true;
                    },
                  })}
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <input
                  {...register("phone_number", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  name="phone_number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                />
                {errors.phone_number && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.phone_number.message}
                  </div>
                )}
              </div>
            </div>
            {/* Resume */}
            <div className="mt-2 flex justify-center items-center rounded-lg border bg-gray-100 px-6 py-10 sm:col-span-2">
              <div className="text-center">
                <div className="mt-4 flex text-sm leading-6 text-gray-400">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white border font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      {...register("resume", { required: "Resume needed" })}
                      id="file-upload"
                      name="resumeFile"
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
                {errors.resume && (
                  <div className="text-red-500 text-sm mt-1">
                    {errors.resume.message}
                  </div>
                )}
              </div>
            </div>
            {/* Message form */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  {...register("message")}
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border px-3.5 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-end border-t border-gray-200 pt-8">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Careers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
export interface IContactProps {
  name: string;
  rows: number;
}

type FormFields = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact: React.FunctionComponent<IContactProps> = ({ name }) => {
  const [data, setData] = useState<any>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("http://localhost:4000/api/contact");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = async (formData: FormFields) => {
    try {
      const response = await fetch("/api/contact", {
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
    <div>
      <div className="relative bg-white mt-24 ">
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32 ">
          <div className="px-6 lg:px-8 ">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg ">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Contact Us
              </h2>

              {/* Form Info  */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                action="/api/contact"
                method="POST"
                className="mt-16  "
              >
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-semibold leading-6 text-gray-900"
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
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block text-sm font-semibold leading-6 text-gray-900"
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
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      className="block text-sm font-semibold leading-6 text-gray-900"
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
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      {errors.email && (
                        <div className="text-red-500">
                          {errors.email.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2"></div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between text-sm leading-6">
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Comments / Questions
                      </label>
                      <p id="message-description" className="text-gray-400">
                        Max 500 characters
                      </p>
                    </div>
                    <div className="mt-2.5">
                      <textarea
                        {...register("message")}
                        id="message"
                        name="message"
                        rows={4}
                        aria-describedby="message-description"
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      ></textarea>
                      {errors.lastName && (
                        <div className="text-red-500">
                          {errors.lastName.message}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                  <button
                    type="submit"
                    className="bg-bar hover:bg-grey text-white font-bold py-2 px-4 rounded-full"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

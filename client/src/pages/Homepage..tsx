import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Demo from "../components/Demo";
import Mission from "../components/Mission";
import FirstImg from "../components/FirstImg";

export interface IHomepageProps {
  name: string;
  description: string;
}

const reviews = [
  {
    id: 1,
    title: "This is the best white t-shirt out there",
    rating: 5,
    content: `
      <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
    `,
    author: "Mark Edwards",
    avatarSrc:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    title: "Adds the perfect variety to my wardrobe",
    rating: 4,
    content: `
      <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
    `,
    author: "Blake Reid",
    avatarSrc:
      "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
  },
  {
    id: 3,
    title: "All good things come in 6-Packs",
    rating: 5,
    content: `
      <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
    `,
    author: "Ben Russel",
    avatarSrc:
      "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Homepage: React.FunctionComponent<IHomepageProps> = ({ name }) => {
  function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="-mt-16 h-auto min-h-screen relative">
      <FirstImg name={""} />
      {/* Content section */}
      <div className="relative isolate -z-10 ">
        <div
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-state to-light opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>

        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Floors for what matters most
                </h1>
                <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Transforming your space begins from the ground up, and nothing
                  says ‘Welcome’ quite like a stunning, well-crafted floor. At
                  Silver State Flooring, we believe that the foundation of every
                  inviting home is a floor that’s not only visually appealing
                  but also reflects the warmth and character of its inhabitants.
                  We’re dedicated to elevating your home with flooring that’s
                  not just pulled from the pages of a magazine, but that truly
                  resonates with the essence of comfort and hospitality. Let us
                  help you lay down the groundwork for countless memories and
                  joyful moments. Welcome home, welcome to Silver State
                  Flooring.
                </p>
              </div>
              <div className=" mt-24 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className=" ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="">
                    <img
                      src={""}
                      alt="Bathroom floor image"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src={""}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                  <div className="relative">
                    <img
                      src={""}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src={""}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl " />
                  </div>
                  <div className="relative">
                    <img
                      src={""}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Missioon*/}
      <Mission name={""} />
      {/* Values section */}
      <div className="bg-white">
        <div className="mx-auto max-w-10xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="relative overflow-hidden rounded-lg">
            <div className="absolute inset-0">
              <img
                src={""}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="relative bg-gray-900 bg-opacity-75 px-6 py-32 sm:px-12 sm:py-40 lg:px-16">
              <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <span className="block sm:inline">Our Values</span>
                </h2>
                <p className="mt-3 text-xl text-white">
                  Integrity, Craftsmanship, and Innovation are the cornerstones
                  of Silver State Flooring. We uphold Integrity in every
                  interaction, ensuring honesty and transparency guide our path.
                  Craftsmanship is our art; we bring decades of experience and
                  attention to detail to every project, guaranteeing floors that
                  are not only beautiful but also enduring. Innovation drives us
                  forward; we embrace cutting-edge techniques and materials to
                  provide you with the best flooring solutions. Above all, we
                  value Community and Sustainability, striving to make a
                  positive impact in the homes we touch and the world we share.
                  These values are the foundation of our commitment to you and
                  to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* checker styled div*/}

      <main />
      {/* Demolation Section */}
      <Demo name={""} />

      {/* Ratings Section */}
      <div className="bg-white grid h-screen place-items-center ">
        <div>
          <h2 id="reviews-heading" className="sr-only">
            Reviews
          </h2>

          <div className="space-y-4 -mt-44">
            {" "}
            {/* Adjusted space between review blocks */}
            {reviews.map((review) => (
              <div key={review.id} className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:ml-14 sm:mt-0">
                  <h3 className="text-sm font-medium text-gray-900">
                    {review.title}
                  </h3>
                  <p className="sr-only">{review.rating} out of 5 stars</p>

                  <div
                    className="mt-1 space-y-2 text-sm text-gray-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>

                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src={review.avatarSrc}
                    alt={`${review.author}.`}
                    className="h-12 w-12 rounded-full"
                  />

                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      {review.author}
                    </p>
                    <div className="mt-2 flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            review.rating > rating
                              ? "text-gray-900"
                              : "text-gray-200",
                            "h-5 w-5 flex-shrink-0",
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import Skyarc from "../public/Sky-arc.jpg.jpg";
import Bath from "../public/bathroom.jpg.jpg";
import Close from "../public/closeup.jpg";
import Floor from "../public/floor-view.jpg";
import Shiny from "../public/white.jpg";
import Bedroom from "../public/window-view.jpg";

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
    <div>
      <main className="isolate" />
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
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
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src={Bath}
                      alt="Bathroom floor image"
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src={Close}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src={Floor}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src={Shiny}
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src={Bedroom}
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

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                At Silver State Flooring, our mission is to create spaces that
                welcome you home. We are committed to providing high-quality
                flooring that sets the stage for your life’s most cherished
                moments. Our dedication to craftsmanship, aesthetic excellence,
                and unparalleled customer service ensures that every floor we
                lay down is a testament to our passion for making your house
                feel like a true home. We strive to exceed expectations, one
                floor at a time, ensuring that every step you take is grounded
                in beauty and durability. Welcome to the Silver State Flooring
                family, where every floor tells a story.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Our team is the heartbeat of Silver State Flooring. Each
                  member brings a unique blend of skill, passion, and dedication
                  to the table, working tirelessly to ensure that every floor we
                  install is a masterpiece. From our seasoned craftsmen to our
                  visionary designers, our people are relentless in their
                  pursuit of excellence. They are not just employees; they are
                  artisans who take pride in creating a foundation that will
                  stand the test of time and bring joy to your home.
                </p>
                <p className="mt-10">
                  We believe that our work is a reflection of our commitment to
                  our customers. Our team’s hard work is evident in every plank
                  laid and every finish applied, ensuring that the final product
                  is nothing short of spectacular. Their unwavering dedication
                  to their craft is what sets us apart and makes Silver State
                  Flooring a leader in the industry. We celebrate the diligence
                  and tireless efforts of our team, as they are the ones who
                  make our mission possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src={Skyarc}
          alt=""
          className="aspect-[4/2] w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Integrity, Craftsmanship, and Innovation are the cornerstones of
            Silver State Flooring. We uphold Integrity in every interaction,
            ensuring honesty and transparency guide our path. Craftsmanship is
            our art; we bring decades of experience and attention to detail to
            every project, guaranteeing floors that are not only beautiful but
            also enduring. Innovation drives us forward; we embrace cutting-edge
            techniques and materials to provide you with the best flooring
            solutions. Above all, we value Community and Sustainability,
            striving to make a positive impact in the homes we touch and the
            world we share. These values are the foundation of our commitment to
            you and to excellence.
          </p>
        </div>
      </div>

      {/* Logo cloud */}
      <div className="relative isolate -z-10 mt-32 sm:mt-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>
      </div>
      <main />
      {/* Ratings Section */}
      <div className="bg-white grid h-screen place-items-center">
        <div>
          <h2 id="reviews-heading" className="sr-only">
            Reviews
          </h2>

          <div className="space-y-4">
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

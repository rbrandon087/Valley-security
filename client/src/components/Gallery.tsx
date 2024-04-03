import React from "react";
import Display from "../public/pic-display.jpg";
import Dance from "../public/dance-display.jpg";
export interface IGalleryProps {
  name: string;
}

const Gallery: React.FunctionComponent<IGalleryProps> = ({ name }) => {
  return (
    <div className="bg-white py-24 sm:py-32 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Flooring Showcase
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Every step begins with the right floor.
          </p>
        </div>
      </div>
      {/* Image hover here!*/}
      <div className="flex min-h-screen items-center justify-center  ">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2  ">
          <div className="group relative cursor-pointer items-center justify-center  overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72 mx-auto ">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Display}
                alt="Home floor image"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Residential
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <a href="/Residential">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </a>
            </div>
          </div>
          <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
            <div className="h-96 w-72 mx-auto">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                src={Dance}
                alt="Dance Studio image"
              />
            </div>
            {/* first image*/}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Commercial
              </h1>
              <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <a href="./Commercial">
                <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">
                  See More
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="fixed bottom-16">
          <p className="font-com text-2xl font-semibold text-white">
            <a href="https://unsplash.com" className="text-blue-500"></a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

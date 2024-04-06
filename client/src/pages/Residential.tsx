import React from "react";
import LazyLoad from "react-lazyload";
import Piano from "../assets/piano.jpg";
import frontDoor from "../assets/front-door.jpg";
import homeFloor from "../assets/home-floor.jpg";
import livingRoom from "../assets/living.jpg";
import Rocks from "../assets/rocks.jpg";
import roomFloor from "../assets/room-floor.jpg";
import showerFloor from "../assets/shower-floor.jpg";
import stairsDown from "../assets/stairs-down.jpg";
import stairsUp from "../assets/stairs-up.jpg";
import tightRoom from "../assets/tight-room.jpg";
import Wall from "../assets/wall.jpg";

export interface IResidentialProps {
  name: string;
}

const Residential: React.FunctionComponent<IResidentialProps> = ({ name }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
        {/* iimage here*/}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={Piano}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={frontDoor}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={homeFloor}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={livingRoom}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={Rocks}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={roomFloor}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={showerFloor}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={stairsDown}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
          <a className="group">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
              <LazyLoad>
                <img
                  src={stairsUp}
                  alt=""
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </LazyLoad>
            </div>
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>
      </div>
    </div>
  );
};

export default Residential;

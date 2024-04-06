import React from "react";
import LazyLoad from "react-lazyload";
import Piano from "../assets/piano.jpg";

export interface ICommercialProps {
  name: string;
}

const Commercial: React.FunctionComponent<ICommercialProps> = ({ name }) => {
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
                  src={Piano}
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

export default Commercial;

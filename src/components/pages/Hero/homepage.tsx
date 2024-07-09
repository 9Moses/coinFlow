import React from "react";

export const Home: React.FC = () => {
  return (
    <div className="gap-16 py-10 md:h-full md:pb-10">
      <div className="md:flex mx-auto w-5/6 items-center justify-between">
        <div className="mt-32 basis-3/5 ">
          <div className="p-3 rounded-md bg-primary-100/20 flex items-center justify-center md:w-[240px]">
            <p className="font-[500] text-sm text-primary-100">
              Best platform Cryptocurrency
            </p>
          </div>

          <div className="py-4">
            <h1 className="text-5xl text-primary-200 font-medium leading-tight">
              Embrace the Future <br className="hidden md:flex" /> Currency of
              Our Time
            </h1>
          </div>

          <div className="py-4 ">
            <p className=" text-primary-200 ">
              Embrace the Future Currency of Our Time. It's not just about
              accumulating coins, it's about unlocking a world of possibilities.
              Imagine a future where fitness fuels financial freedom, where
              every workout earns you rewards, and where community thrives on
              shared goals
            </p>
          </div>
        </div>

        <div className="flex basis-3/5 mt-32">
          <div className="flex flex-col w-full gap-10">
            <div className="p-4 rounded-lg bg-white shadow-md md:w-3/5 md:h-full">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <img
                      src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                      alt="Tether"
                      className="w-10 h-10 mr-2"
                    />
                    <div className="flex flex-col justify-start ">
                      <span className="text-lg font-semibold">Tether</span>
                      <p className="text-gray-500 text-sm">USDT</p>
                    </div>
                  </div>
                  <div className="text-3xl font-medium mt-6">$12,715</div>
                  <div className=" text-red-500 rounded-md bg-red-400/20 w-2/3  mt-1 flex items-center justify-center">
                    <span className="mr-1">↘</span>
                    <span className="text-sm">-18%</span>
                  </div>
                </div>
                <div className="mt-2">
                  <img
                    src="https://via.placeholder.com/150x50"
                    alt="Graph"
                    className="w-full mx-2"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-1 gap-2">
              <div className="p-4 rounded-lg bg-white shadow-md md:w-3/5">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                        alt="Tether"
                        className="w-10 h-10 mr-2"
                      />
                      <div className="flex flex-col justify-start ">
                        <span className="text-lg font-semibold">Tether</span>
                        <p className="text-gray-500 text-sm">USDT</p>
                      </div>
                    </div>
                    <div className="text-3xl font-medium mt-6">$12,715</div>
                    <div className=" text-red-500 rounded-md bg-red-400/20 w-2/3  mt-1 flex items-center justify-center">
                      <span className="mr-1">↘</span>
                      <span className="text-sm">-18%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <img
                      src="https://via.placeholder.com/150x50"
                      alt="Graph"
                      className="w-full mx-2"
                    />
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-white shadow-md md:w-3/5">
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <img
                        src="https://cryptologos.cc/logos/tether-usdt-logo.png"
                        alt="Tether"
                        className="w-10 h-10 mr-2"
                      />
                      <div className="flex flex-col justify-start ">
                        <span className="text-lg font-semibold">Tether</span>
                        <p className="text-gray-500 text-sm">USDT</p>
                      </div>
                    </div>
                    <div className="text-3xl font-medium mt-6">$12,715</div>
                    <div className=" text-red-500 rounded-md bg-red-400/20 w-2/3  mt-1 flex items-center justify-center">
                      <span className="mr-1">↘</span>
                      <span className="text-sm">-18%</span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <img
                      src="https://via.placeholder.com/150x50"
                      alt="Graph"
                      className="w-full mx-2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

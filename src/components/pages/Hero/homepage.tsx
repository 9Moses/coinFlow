import CryptoCurrencyInfo from "@/components/shared/Crypto/CryptoData";
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
        <div className="flex basis-3/5 ">
          <CryptoCurrencyInfo />
        </div>
      </div>
    </div>
  );
};

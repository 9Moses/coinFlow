import { Sponsors } from "@/components/constant/sponsors";
import {
  ActionButton,
  CryptoCurrencyInfo,
  CryptoCurrencyInfoList,
  CryptoDataBTC,
  SecureFeatures,
  SelectedPage,
  TableDateList,
  WatchDemoButton,
} from "@/components/shared";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export const Home = ({ setSelectedPage }: Props) => {
  return (
    <>
      <div className="bg-custom-gradient gap-16 py-10 md:h-full ">
        <div className="md:flex md:gap-8 mx-auto w-5/6 items-center justify-between">
          <div className="mt-24 basis-3/5 ">
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
                accumulating coins, it's about unlocking a world of
                possibilities. Imagine a future where fitness fuels financial
                freedom, where every workout earns you rewards, and where
                community thrives on shared goals
              </p>
            </div>

            <div className="flex items-center gap-4 w-full">
              <ActionButton setSelectedPage={setSelectedPage}>
                Trade Now
              </ActionButton>
              <WatchDemoButton />
            </div>

            <div className="py-10">
              <SecureFeatures />
            </div>
          </div>
          <div className="flex basis-3/5  ">
            <div className="flex flex-col">
              <div className="flex mx-auto justify-items-end">
                <CryptoCurrencyInfo />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                <div className="mt-1">
                  <CryptoCurrencyInfoList />
                </div>
                <div className="mt-1">
                  <CryptoDataBTC />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[130px] w-full bg-primary-200 py-10 ">
        <Sponsors />
      </div>
      <TableDateList />
    </>
  );
};

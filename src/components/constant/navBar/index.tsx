import { SelectedPage } from "@/components/shared/types";
import { useState } from "react";
import LinkWithDropdown from "./Links";
import { ActionButton } from "@/components/shared/Button/actionButton";
import useMediaQuery from "@/components/mediaQuery/useMediaQuery";
import { Bars3Icon, SunIcon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const NavBar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const flexCenter = "flex items-center justify-center";
  const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow text-white";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexCenter} fixed top-0 z-30 w-full py-6`}
      >
        <div className="flex items-center justify-between mx-auto w-5/6 gap-6">
          <div className={`${flexCenter} gap-2`}>
            <SunIcon className="h-8 w-8 text-primary-100" />
            <h1 className="font-[500]">CoinFlow</h1>
          </div>
          {isAboveMediumScreens ? (
            <>
              <div>
                <div className={`${flexCenter}`}>
                  <div className={`${flexCenter} gap-6`}>
                    <LinkWithDropdown
                      page="Trade"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      dropdownOptions={["CoinBase", "Entheral", "SpaceX"]}
                    />
                    <LinkWithDropdown
                      page="Features"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                      dropdownOptions={["CoinBase", "Entheral", "SpaceX"]}
                    />
                    <LinkWithDropdown
                      page="Market"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkWithDropdown
                      page="Portfolio"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                    <LinkWithDropdown
                      page="Blog"
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                </div>
              </div>
              <div>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Get Started
                </ActionButton>
              </div>
            </>
          ) : (
            <button
              className="p-2"
              onClick={() => setIsMenuToggle(!isMenuToggle)}
            >
              <Bars3Icon className="h-8 w-8 text-primary-200" />
            </button>
          )}
        </div>
      </div>

      {!isAboveMediumScreens && isMenuToggle && (
        <div className="fixed right-0 top-0 bottom-0 z-40 h-[400px] w-full bg-primary-200 drop-shadow-xl">
          <div className="flex justify-between p-12">
            <div>
              <h1 className="text-white">CoinFlow</h1>
            </div>
            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-xl text-white">
            <LinkWithDropdown
              page="Trade"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              dropdownOptions={["CoinBase", "Entheral", "SpaceX"]}
            />
            <LinkWithDropdown
              page="Features"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              dropdownOptions={["CoinBase", "Entheral", "SpaceX"]}
            />
            <LinkWithDropdown
              page="Market"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkWithDropdown
              page="Portfolio"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkWithDropdown
              page="Blog"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

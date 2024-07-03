import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SelectedPage } from "@/components/shared/types";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  dropdownOptions?: string[];
};

const LinkWithDropdown: React.FC<Props> = ({
  page,
  selectedPage,
  setSelectedPage,
  dropdownOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <div
        className="flex items-center"
        onMouseEnter={toggleDropdown}
        onMouseLeave={closeDropdown}
      >
        <RouterLink
          to={`/${lowerCasePage}`}
          className={`${
            selectedPage === lowerCasePage ? "text-primary-100" : ""
          } transition duration-500 text-sm font-[500] md:text-gray-800 text-white hover:text-gray-500`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </RouterLink>
        {dropdownOptions && (
          <ChevronDownIcon className="w-5 h-5 ml-1 md:text-gray-800 text-white hover:text-gray-500" />
        )}
      </div>
      {dropdownOptions && isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg z-50">
          {dropdownOptions.map((option, index) => (
            <RouterLink
              key={index}
              to={`/${lowerCasePage}/${option.toLowerCase().replace(/ /g, "")}`}
              className="block px-4 py-2 text-gray-800 hover:bg-primary-100 hover:text-white"
              onClick={() => {
                setSelectedPage(lowerCasePage);
                closeDropdown();
              }}
            >
              {option}
            </RouterLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default LinkWithDropdown;

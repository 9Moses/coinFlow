import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "@/components/constant/navBar";
import { Home } from "@/components/pages";
import { SelectedPage } from "../shared";

const PageRoutes: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className=" min-h-screen ">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default PageRoutes;

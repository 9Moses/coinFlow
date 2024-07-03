import { Link } from "react-router-dom";
import { SelectedPage } from "../types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

export const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <Link
      className="rounded-md bg-primary-100 px-10 py-2 hover:bg-primary-200 duration-500 text-white"
      onClick={() => setSelectedPage(SelectedPage.GetStarted)}
      to={`/${SelectedPage.GetStarted}`}
    >
      {children}
    </Link>
  );
};

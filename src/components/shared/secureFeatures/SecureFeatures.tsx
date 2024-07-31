import { CheckCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

export const SecureFeatures: React.FC = () => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center">
        <CheckCircleIcon className="h-6 w-6 text-primary-200" />
        <span className="ml-2 text-gray-700">
          Transactions are secure and encrypted
        </span>
      </div>
      <div className="flex items-center">
        <CheckCircleIcon className="h-6 w-6 text-primary-200" />
        <span className="ml-2 text-gray-700">
          Solutions for Using Currency Without Banks
        </span>
      </div>
    </div>
  );
};

import React, { useState } from "react";

import { Modal } from "../Modal/modal";
import { PlayCircleIcon } from "@heroicons/react/24/outline";

export const WatchDemoButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        className="flex w-full items-center gap-2 px-4 py-2 font-[600] text-primary-200 border border-primary-100 bg-transparent rounded-md hover:bg-primary-200/80 hover:text-white"
        onClick={openModal}
      >
        Watch Demo
        <PlayCircleIcon className="size-6 " />
      </button>
      {isModalOpen && <Modal closeModal={closeModal} />}
    </div>
  );
};

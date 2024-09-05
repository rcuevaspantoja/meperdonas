"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import formatName from "@/app/utils/format-name";
import Gif from "../Gif/Gif";
import Buttons from "../Buttons/Buttons";
import InsertName from "../InsertName/InsertName";

function MePerdonas() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const name: string = formatName(usePathname());

  useEffect(() => {
    if (name.length === 0) {
      openModal();
    }
  }, [name]);

  return (
    <div className="flex flex-col items-center justify-center bg-white border-black border-2 rounded-md">
      <Gif /> 
      <InsertName isOpen={isModalOpen} onClose={closeModal} />
      <div className="text-4xl">
        <span className="block md:inline text-center">{name}</span>
        <span className="block md:inline"> ¿Me Perdonas?</span>
      </div>
      <Buttons />
    </div>
  );
}

export default MePerdonas;

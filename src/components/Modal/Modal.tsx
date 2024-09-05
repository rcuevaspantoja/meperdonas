"use client";
import React, { useState } from "react";
import formatName from "@/app/utils/format-name";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [loading, setLoading] = useState(true); // Hook fuera de condicionales
  const name: string = formatName(usePathname());
  const router = useRouter(); // Hook fuera de condicionales

  const handleVolverButton = () => {
    router.push('/');
  };



  // Renderización condicional del contenido, pero los hooks se ejecutan siempre
  return (
    isOpen ? (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center justify-center m-4">
          {loading && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
          )}
          <iframe
            src={"https://giphy.com/embed/TdfyKrN7HGTIY"}
            height="250"
            style={{ pointerEvents: "none" }}
            className={`m-4 mb-0 ${loading ? "opacity-0" : "opacity-100"}`}
            allowFullScreen
            onLoad={() => setLoading(false)}
          ></iframe>
          <p>Gracias {name}, hoy ha triunfado el amor.</p>
          <div className="flex flex-row">
            <button
              onClick={handleVolverButton}
              className="m-2 px-8 py-2 bg-blue-500 text-white font-semibold bold rounded-md border-black"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Modal;

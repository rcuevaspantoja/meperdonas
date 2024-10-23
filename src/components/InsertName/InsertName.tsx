// src/app/components/InsertName.tsx
"use client";
import React, { useState } from "react";
import { useHandlers } from "@/app/utils/handlers/handlers"; // Asegúrate de que la ruta es correcta

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InsertName = ({ isOpen, onClose }: ModalProps) => {
  const [nombre, setNombre] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const { handleSubmit, handleShare, handleCopy } = useHandlers(); // Llamada al custom hook

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      {showNotification && (
        <div
          className="fixed w-full md:w-1/2 top-4 left-1/2 transform -translate-x-1/2 p-4 mb-4 text-sm text-center text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">¡Enlace copiado!</span> El enlace ha
          sido copiado al portapapeles.
        </div>
      )}

      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-black">
        <span className="text-2xl">Nombre de él o ella</span>
        <input
          className="border-rose-500 rounded-md my-2 border-2 p-2"
          value={nombre}
          onChange={handleInputChange}
        ></input>

        <div className="flex flex-col md:flex-row mt-8">
          <button
            onClick={() => handleSubmit(nombre, onClose)} // Pasar los argumentos necesarios
            className={`m-2 px-8 py-2 text-white font-semibold bold rounded-md border-black ${
              nombre.trim() === ""
                ? "bg-blue-500 opacity-40 cursor-not-allowed"
                : "bg-blue-500"
            }`}
            disabled={nombre.trim() === ""}
          >
            Visualizar
          </button>
          <button
            onClick={() => handleCopy(nombre, setShowNotification)} // Pasar los argumentos necesarios
            className={`m-2 px-8 py-2 text-white font-semibold bold rounded-md border-black ${
              nombre.trim() === ""
                ? "bg-yellow-500 opacity-40 cursor-not-allowed"
                : "bg-yellow-500"
            }`}
            disabled={nombre.trim() === ""}
          >
            Copiar Enlace
          </button>
          <button
            onClick={() => handleShare(nombre)} // Pasar los argumentos necesarios
            className={`m-2 px-8 py-2 text-white font-semibold bold rounded-md border-black ${
              nombre.trim() === ""
                ? "bg-green-500 opacity-40 cursor-not-allowed"
                : "bg-green-500"
            }`}
            disabled={nombre.trim() === ""}
          >
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsertName;

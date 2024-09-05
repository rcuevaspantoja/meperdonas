"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InsertName = ({ isOpen, onClose }: ModalProps) => {
  const [nombre, setNombre] = useState(""); // Estado para almacenar el nombre ingresado
  const router = useRouter(); // Hook para redirigir

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNombre(e.target.value); // Actualiza el estado cuando el usuario escribe
  };

  const handleSubmit = () => {
    if (nombre.trim()) {
      // Normalizar el nombre, eliminando acentos y caracteres especiales
      const normalizedNombre = nombre
        .normalize("NFD") // Descompone los caracteres acentuados
        .replace(/[\u0300-\u036f]/g, "") // Remueve los diacríticos (acentos, tildes)
        .replace(/ñ/g, "n") // Reemplazar 'ñ' por 'n'
        .replace(/Ñ/g, "N"); // Reemplazar 'Ñ' por 'N'

      // Redirige a la ruta con el nombre normalizado
      router.push(`/${normalizedNombre}`);
      onClose(); // Cierra el modal
    }
  };

  if (!isOpen) return null; // No renderizar si el modal no está abierto
  const handleShare = async () => {
    const normalizedNombre = nombre
      .normalize("NFD") // Descompone los caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "") // Remueve los diacríticos (acentos, tildes)
      .replace(/ñ/g, "n") // Reemplazar 'ñ' por 'n'
      .replace(/Ñ/g, "N"); // Reemplazar 'Ñ' por 'N'
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hola ${nombre}, me perdonas? `,
          text: `Hola ${nombre}, me perdonas? `,
          url: window.location.href + normalizedNombre, // URL actual + nombre
        });
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      console.warn("La API de compartir no está soportada en este navegador.");
    }
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-center border-2 border-black">
        <span>Nombre de él o ella </span>
        <input
          className=" border-blue-300 rounded-md my-2 border-2"
          value={nombre}
          onChange={handleInputChange} // Maneja el cambio en el input
        ></input>

        <div className="flex mt-8">
          <button
            onClick={handleSubmit} // Llama a la función para redirigir
            className="m-2 px-8 py-2 bg-blue-500 text-white font-semibold bold rounded-md border-black"
          >
            Visualizar
          </button>
          <button
            onClick={handleShare}
            className="m-2 px-8 py-2 bg-green-500 text-white font-semibold bold rounded-md border-black"
          >
            Compartir
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsertName;

"use client";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/Modal";

const Buttons = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const buttonRed = document.getElementById("no");
    const buttonGreen = document.getElementById("si");
    const maxWidth = window.innerWidth - 60 * 2;
    const maxHeight = window.innerHeight - 72 * 2;
    const increment = 3; // Incremento en píxeles
    let counter = 0;
    // Función para hacer más grande el botón verde
    const enlargeButtonGreen = () => {
      if (buttonGreen) {
        const currentPaddingLeft = parseInt(
          window.getComputedStyle(buttonGreen).paddingLeft
        );
        const currentPaddingRight = parseInt(
          window.getComputedStyle(buttonGreen).paddingRight
        );
        const currentPaddingTop = parseInt(
          window.getComputedStyle(buttonGreen).paddingTop
        );
        const currentPaddingBottom = parseInt(
          window.getComputedStyle(buttonGreen).paddingBottom
        );
        const currentFontSize = parseInt(
          window.getComputedStyle(buttonGreen).fontSize
        );

        // Incrementar padding en todos los lados
        buttonGreen.style.paddingLeft = currentPaddingLeft + increment + "px";
        buttonGreen.style.paddingRight = currentPaddingRight + increment + "px";
        buttonGreen.style.paddingTop = currentPaddingTop + increment + "px";
        buttonGreen.style.paddingBottom =
          currentPaddingBottom + increment + "px";
        buttonGreen.style.fontSize = currentFontSize + increment + "px";
      }
      if (counter == 25) {
        alert("Por cosas así la gente dice que el amor no existe");
        location.reload();
      }
      counter++;
    };

    // Mover el botón rojo
    if (buttonRed) {
      // Comprobación explícita para null
      buttonRed.addEventListener("mouseover", () => {
        buttonRed.style.position = "absolute";
        buttonRed.style.left = Math.floor(Math.random() * maxWidth + 1) + "px";
        buttonRed.style.top = Math.floor(Math.random() * maxHeight + 1) + "px";

        // Llamar a la función para hacer más grande el botón verde
        enlargeButtonGreen();
      });
    }
  }, []);

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <div className="flex m-5">
        <button
          className="m-2 px-8 py-2 bg-green-500 text-white font-semibold bold rounded-md border-black"
          id="si"
          onClick={openModal}
        >
          Si
        </button>
        <button
          className="m-2 px-8 py-2 bg-red-500 text-white font-semibold bold rounded-md border-black"
          id="no"
        >
          No
        </button>
      </div>
    </>
  );
};

export default Buttons;

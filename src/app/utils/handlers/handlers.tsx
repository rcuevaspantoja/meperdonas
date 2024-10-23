// src/app/utils/handlers/handlers.ts
import { useRouter } from "next/navigation";

// Normaliza el nombre quitando acentos y reemplazando ñ
const normalizeNombre = (nombre: string) => {
  return nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ñ/g, "n")
    .replace(/Ñ/g, "N");
};

// Custom hook para manejar el submit, compartir y copiar
export const useHandlers = () => {
  const router = useRouter();

  const handleSubmit = (nombre: string, onClose: () => void) => {
    if (nombre.trim()) {
      const normalizedNombre = normalizeNombre(nombre);
      router.push(`/${normalizedNombre}`);
      onClose();
    }
  };

  const handleShare = async (nombre: string) => {
    const normalizedNombre = normalizeNombre(nombre);
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Hola ${nombre}, me perdonas?`,
          text: `Hola ${nombre}, me perdonas?`,
          url: window.location.href + normalizedNombre,
        });
      } catch (error) {
        console.error("Error al compartir:", error);
      }
    } else {
      console.warn("La API de compartir no está soportada en este navegador.");
    }
  };

  const handleCopy = (
    nombre: string, 
    setShowNotification: (state: boolean) => void
  ) => {
    if (nombre.trim()) {
      const normalizedNombre = normalizeNombre(nombre);
      const url = `${window.location.href}${normalizedNombre}`;
      navigator.clipboard
        .writeText(url)
        .then(() => {
          setShowNotification(true); // Mostrar la notificación
          setTimeout(() => setShowNotification(false), 3000); // Ocultar después de 3 segundos
        })
        .catch((error) => {
          console.error("Error al copiar el enlace:", error);
        });
    }
  };

  return { handleSubmit, handleShare, handleCopy };
};

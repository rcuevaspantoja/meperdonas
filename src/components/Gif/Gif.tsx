"use client";
import chooseGif from "@/app/utils/choose-gif";
import React, { useEffect, useState } from "react";

interface GifProps {
  url?: string;
}

const Gif = ({ url }: GifProps) => {
  const [gifSelected, setGifSelected] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUrl = async () => {
      const response = chooseGif();
      setGifSelected(response);
    };

    getUrl();
  }, []);

  return (
    <div className="relative flex justify-center items-center h-64">
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}

      <iframe
        src={gifSelected}
        height="250"
        style={{ pointerEvents: "none" }}
        className={`m-8 ${loading ? "opacity-0" : "opacity-100"}`}
        allowFullScreen
        onLoad={() => setLoading(false)}
      ></iframe>
    </div>
  );
};

export default Gif;

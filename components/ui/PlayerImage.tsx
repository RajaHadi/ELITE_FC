"use client";

import Image from "next/image";
import { useState } from "react";
import PlayerImageFallback from "./PlayerImageFallback";

interface PlayerImageProps {
  src: string;
  alt: string;
}

export default function PlayerImage({ src, alt }: PlayerImageProps) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return <PlayerImageFallback className="absolute inset-0 w-full h-full" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}

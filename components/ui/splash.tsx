"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="animate-fade-in-out">
        <Image
          src="/images/logo.jpg"
          alt="Strategy Pulse Logo"
          width={250}
          height={250}
          priority
          className="w-64 h-64 object-contain"
        />
      </div>
    </div>
  );
}

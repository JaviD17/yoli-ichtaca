// useScreenSize.js
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const hasWindow = typeof window !== "undefined";
  const [screenSize, setScreenSize] = useState({
    width: hasWindow ? window.innerWidth : undefined,
    height: hasWindow ? window.innerHeight : undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;

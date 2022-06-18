import { useState, useEffect } from "react";

function useScreenSize() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(windowWidth < 600);

  const getSize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
    return window.removeEventListener("resize", getSize);
  }, []);

  return { windowWidth, windowHeight, isMobile };
}

export default useScreenSize;

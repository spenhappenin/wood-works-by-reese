import { useState, useEffect, } from "react";

export const useWindowWidth = (setWidth) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const mobileView = () => {
    if (windowWidth < setWidth)
      return true;
  };

  useEffect( () => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  })

  return { windowWidth, mobileView, };
}

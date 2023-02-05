import { useState, useEffect } from "react";
const useSlidesHook = (value: number) => {
  const [slidesPerView, setSlidsPerView] = useState(value);

  useEffect(() => {
    const changeView = () => {
      if (window.innerWidth <= 650) {
        setSlidsPerView(1);
      } else if (window.innerWidth <= 768) {
        setSlidsPerView(2);
      } else {
        setSlidsPerView(3);
      }
    };
    window.addEventListener("resize", changeView);
    changeView();
    return () => {
      window.removeEventListener("resize", changeView);
    };
  }, []);

  return slidesPerView;
};

export default useSlidesHook;

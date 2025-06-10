import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={handleClick}
      className="hidden md:block fixed bottom-8 right-5 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
};

export default ScrollToTopButton;
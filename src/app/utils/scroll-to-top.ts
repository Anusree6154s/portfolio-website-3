import { animate } from "framer-motion";

export const scrollToTopSlow = () => {
  const currentY = window.scrollY;

  animate(currentY, 0, {
    duration: 2.5,
    ease: [0.1, 0.95, 0.18, 1],
    onUpdate(value) {
      window.scrollTo(0, value);
    },
  });
};

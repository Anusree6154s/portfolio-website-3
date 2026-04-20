"use client";

import { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Tooltip({
  text,
  children,
  background,
  color,
  top,
  bottom,
  left,
  right,
}: {
  text: string;
  children: ReactNode;
  background?: string;
  color?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <span
      style={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      <AnimatePresence>
        {show && (
          <motion.span
            className="tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            style={{
              position: "absolute",
              top: top ?? "none",
              bottom: bottom ?? "-130%",
              left: left ?? "50%",
              right: right ?? "none",
              transform: "translateX(-50%)",
              whiteSpace: "nowrap",
              padding: "6px 10px",
              fontSize: "12px",
              borderRadius: "8px",
              background: background ?? "#332f2f",
              color: color ?? "#fff",
              pointerEvents: "none",
              zIndex: 50,
              fontWeight: 400,
            }}
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}

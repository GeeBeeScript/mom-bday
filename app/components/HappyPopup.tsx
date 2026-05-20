"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate } from "motion";

interface HappyPopupProps {
  onClose?: () => void;
}

export default function HappyPopup({ onClose }: HappyPopupProps) {
  const [visible, setVisible] = useState(true);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // entrance animation
    if (overlayRef.current) {
      animate(overlayRef.current, { opacity: [0, 1] }, { duration: 0.6 });
    }
    if (modalRef.current) {
      animate(
        modalRef.current,
        { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0px)"] },
        { duration: 0.6, easing: "ease-out" },
      );
    }
  }, []);

  const handleClose = async () => {
    if (modalRef.current) {
      animate(
        modalRef.current,
        { opacity: 0, transform: ["translateY(0px)", "translateY(-30px)"] },
        { duration: 0.45 },
      );
    }
    if (overlayRef.current) {
      await animate(
        overlayRef.current,
        { opacity: 0, transform: ["none", "translateY(-8vh)"] },
        { duration: 0.6 },
      ).finished;
    }
    setVisible(false);
    onClose?.();
  };

  if (!visible) return null;

  return (
    <div
      ref={overlayRef}
      className="birthday-overlay fixed inset-0 z-50 flex items-center justify-center p-6"
    >
      <div
        ref={modalRef}
        className="birthday-modal max-w-xl w-full rounded-2xl p-8"
      >
        <h2 className="text-3xl font-bold text-zinc-50">Happy Birthday, Mummy!</h2>
        <p className="mt-4 text-zinc-200">
          I pray that you will always have peace, joy, and countless reasons to celebrate. 
        </p>
         <p className="mt-4 text-zinc-200">
          GB loves you ❤️
        </p>
        <div className="mt-6 flex justify-end">
          <button
            onClick={handleClose}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium text-zinc-50 hover:bg-white/20"
          >
            Please, click
          </button>
        </div>
      </div>
    </div>
  );
}

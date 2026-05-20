"use client";

import React, { useState } from "react";
import HappyPopup from "./HappyPopup";
import Landing from "./Landing";

export default function ClientHome() {
  const [showPopup, setShowPopup] = useState(true);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-black text-zinc-50 font-sans">
      {showPopup && <HappyPopup onClose={handlePopupClose} />}
      {!showPopup && <Landing />}
    </div>
  );
}

// components/SuccessOverlay.tsx
"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function SuccessOverlay({
  show,
  duration = 4000,
}: {
  show: boolean;
  duration?: number;
}) {
  const [animData, setAnimData] = useState<any>(null);
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    fetch("/success.json")
      .then((res) => res.json())
      .then((data) => setAnimData(data))
      .catch(() => setAnimData(null));
  }, []);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const t = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(t);
    }
  }, [show, duration]);

  if (!visible || !animData) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ width: 320, height: 320 }}>
        <Lottie animationData={animData} loop={false} />
      </div>
    </div>
  );
}

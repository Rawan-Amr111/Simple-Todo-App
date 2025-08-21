"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

export default function Celebration({ show }: { show: boolean }) {
  const [animData, setAnimData] = useState<any>(null);
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    fetch("/Thumbs up birdie.json")
      .then((res) => res.json())
      .then((data) => setAnimData(data));
  }, []);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!visible || !animData) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div style={{ width: 400, height: 400 }}>
        <Lottie animationData={animData} loop={false} />
      </div>
    </div>
  );
}

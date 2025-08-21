"use client";
import { useState } from "react";

const ProgressBar = ({
  completed,
  total,
  userId,
}: {
  completed: number;
  total: number;
  userId: string | null;
}) => {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div
      style={{
        width: "100%",
        height: "10px",
        borderRadius: "10px",
        background: "#d3d3d3",
        overflow: "hidden",
        position: "relative",
        marginBottom: "50px",
        maxWidth: "72rem",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          width: `${percentage}%`,
          height: "100%",
          background: "linear-gradient(90deg, #ff4da6, #800080)",
          transition: "width 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default ProgressBar;

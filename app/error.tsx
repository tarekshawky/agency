"use client"; // error.ts must be a Client Component

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Error page caught an error:", error);
  }, [error]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Something went wrong!</h1>
      <p>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
}

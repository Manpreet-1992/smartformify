// src/components/HealthCheck.js
import React, { useEffect, useState } from "react";

function HealthCheck() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/`)
      .then((res) => {
        if (res.ok) {
          setStatus("✅ Backend is running");
        } else {
          setStatus("❌ Backend check failed");
        }
      })
      .catch(() => {
        setStatus("❌ Could not reach backend");
      });
  }, []);

  return (
    <div style={{ padding: "0.5rem", backgroundColor: "#f0f0f0", fontSize: "0.9rem" }}>
      <strong>Health Check:</strong> {status}
    </div>
  );
}

export default HealthCheck;

// src/components/HealthCheck.js
import React, { useEffect, useState } from 'react';

const HealthCheck = () => {
  const [status, setStatus] = useState('Checking...');

  useEffect(() => {
    const apiURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    fetch(apiURL)
      .then((res) => {
        if (res.ok) {
          setStatus('✅ Backend is running');
        } else {
          setStatus('⚠️ Backend not reachable');
        }
      })
      .catch(() => {
        setStatus('❌ Backend connection failed');
      });
  }, []);

  return (
    <div style={{ padding: '10px', background: '#eef', fontSize: '14px' }}>
      {status}
    </div>
  );
};

export default HealthCheck;


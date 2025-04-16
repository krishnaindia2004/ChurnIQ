import React, { useEffect, useState } from 'react';

const VisualizationPage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/get-image")
      .then(res => res.json())
      .then(data => {
        setImageData(data.image); // Base64 image from backend
      })
      .catch(err => {
        console.error("Failed to load image:", err);
      });
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '40px', background: '#1c1c1e', minHeight: '100vh', color: 'white' }}>
      <h2 style={{ marginBottom: '20px' }}>Churn Prediction Chart</h2>
      {imageData ? (
        <img
          src={`data:image/png;base64,${imageData}`}
          alt="Churn Prediction Chart"
          style={{ maxWidth: '100%', borderRadius: '12px' }}
        />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default VisualizationPage;

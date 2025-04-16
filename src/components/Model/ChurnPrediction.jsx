import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { MessageCircle, X } from "lucide-react";
import ChatBot from '../chatbot/chatbot';
import { useNavigate } from 'react-router-dom';


const ChurnPrediction = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [showVisualize, setShowVisualize] = useState(false);
  const navigate = useNavigate();



  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type !== 'text/csv') {
      alert('Please upload a CSV file');
      return;
    }
    setFile(selectedFile);
  };

  const handleAnalysis = async () => {
    if (!file) {
      alert('Please upload a file first');
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/churn-prediction', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      setAnalysisResult(result);
      setShowVisualize(true);
      alert('Churn prediction completed');
    } catch (error) {
      alert('Analysis failed. Please try again.');
      console.error('Churn prediction error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuestionSubmit = () => {
    if (!question.trim()) {
      alert('Please type a question');
      return;
    }
    alert(`Your question: ${question}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '20px', 
        padding: '40px', 
        flexWrap: 'wrap'
      }}
    >
      {/* File Upload & Churn Prediction Box */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          backgroundColor: '#1c1c1e',
          color: 'white',
          padding: '24px',
          borderRadius: '8px',
          width: '400px',
          boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.3)'
        }}
      >
        <h2 style={{ color:'white',textAlign: 'center', marginBottom: '20px' }}>
          Feed the Dataset
        </h2>
        <label htmlFor="csvUpload" className="custom-file-upload">
  Upload CSV
</label>
        <input 
        id="csvUpload"
          type="file" 
          accept=".csv"
          onChange={handleFileUpload}
          style={{ display: 'none' }}
          // style={{
          //   width: '100%',
          //   padding: '10px',
          //   borderRadius: '4px',
          //   backgroundColor: '#6a0dad',
          //   color: 'white',
          //   border: 'none'
          // }}
        />

        {file && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#3d0b6b', borderRadius: '4px' }}>
            <p>Uploaded: {file.name}</p>
          </div>
        )}

        <button
          onClick={handleAnalysis}
          disabled={!file || isLoading}
          style={{
            width: '100%',
            marginTop: '10px',
            padding: '12px',
            backgroundColor: file && !isLoading ? '#8e24aa' : '#5c1e7d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: file && !isLoading ? 'pointer' : 'not-allowed',
            opacity: file && !isLoading ? 1 : 0.6
          }}
        >
          {isLoading ? 'Analyzing...' : 'Perform Churn Prediction'}
          
        </button>
        {showVisualize && (
  <button
    onClick={() => navigate("/visualize")}
    style={{
      width: '100%',
      marginTop: '10px',
      padding: '12px',
      backgroundColor: '#4f46e5',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Visualize Results
  </button>
)}


        {analysisResult && (
          <div 
            style={{ 
              marginTop: '16px', 
              backgroundColor: '#3d0b6b', 
              padding: '12px', 
              borderRadius: '4px' 
            }}
          >
            <h3 style={{color:'white', marginBottom: '12px', fontSize: '1.125rem' }}>
              Analysis Results
            </h3>
            <pre 
              style={{ 
                color: '#00ff00', 
                backgroundColor: 'black', 
                padding: '12px', 
                borderRadius: '4px', 
                overflowX: 'auto',
                fontSize: '0.75rem' 
              }}
            >
              {JSON.stringify(analysisResult, null, 2)}
            </pre>
          </div>
        )}
      </motion.div>
 <>
     <motion.div> 
       {/* Your churn prediction UI here */}
     </motion.div>
    
     <ChatBot />
   </>



     </motion.div>
  );
};

export default ChurnPrediction;





import React, { useState } from 'react';

const ChurnPrediction = () => {
  const [file, setFile] = useState(null);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]); // Stores chat messages

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleClearFile = () => {
    setFile(null);
  };

  const handleQuestionSubmit = () => {
    if (!question.trim()) {
      alert('Please type a question');
      return;
    }

    // Add user question to chat
    const newMessages = [...messages, { text: question, sender: 'user' }];
    setMessages(newMessages);
    setQuestion('');

    // Simulate chatbot reply after 1 second
    setTimeout(() => {
      const botReply = getBotReply(question);
      setMessages([...newMessages, { text: botReply, sender: 'bot' }]);
    }, 1000);
  };

  // Mock chatbot reply function
  const getBotReply = (userQuestion) => {
    return `Bot: I received your question - "${userQuestion}".`; // Replace with real API call if needed
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      backgroundColor: '#20232a', 
      color: '#E0E0E0' 
    }}>
      
      {/* Title */}
      <h2 style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#ffffff' }}>
        <span style={{ fontSize: '1.5rem', marginRight: '10px' }}>💬</span>
        Chatbot - Ask Questions
      </h2>

      {/* Chat Display Area */}
      <div style={{
        width: '80%',
        maxWidth: '800px',
        height: '400px',
        backgroundColor: '#282c34',
        borderRadius: '8px',
        padding: '20px',
        overflowY: 'auto',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {messages.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#bbb' }}>No messages yet</p>
        ) : (
          messages.map((msg, index) => (
            <div key={index} style={{ 
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              backgroundColor: msg.sender === 'user' ? '#007acc' : '#444c56',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '6px',
              margin: '5px 0',
              maxWidth: '70%',
              textAlign: msg.sender === 'user' ? 'right' : 'left'
            }}>
              {msg.text}
            </div>
          ))
        )}
      </div>

      {/* Input Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '80%',
        maxWidth: '800px',
        gap: '10px'
      }}>
        
        {/* File Upload */}
        <input
          type="file"
          onChange={handleFileUpload}
          style={{
            flex: '1',
            backgroundColor: '#333842',
            color: 'white',
            border: '1px solid #555',
            padding: '6px',
            borderRadius: '6px',
            cursor: 'pointer'
          }}
        />

        {/* Clear File Button */}
        <button 
          onClick={handleClearFile} 
          style={{
            backgroundColor: '#444c56',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: '0.3s',
            fontSize: '14px'
          }}
        >
          Clear File
        </button>

        {/* Question Input */}
        <input
          type="text"
          placeholder="Type your question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={{
            flex: '2',
            backgroundColor: '#333842',
            color: 'white',
            border: '1px solid #555',
            padding: '8px',
            borderRadius: '6px'
          }}
        />

        {/* Ask Button */}
        <button 
          onClick={handleQuestionSubmit} 
          style={{
            backgroundColor: '#007acc',
            color: 'white',
            border: 'none',
            padding: '8px 12px',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: '0.3s',
            fontSize: '14px'
          }}
        >
          Ask
        </button>
      </div>
    </div>
  );
};

export default ChurnPrediction;

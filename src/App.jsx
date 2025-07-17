import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('count');
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  return (
    <div className="app">
      <h1 className="title">Counter App</h1>
      <div className="counter-box">
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={() => setCount(prev => prev - 1)} className="btn decrement">-</button>
          <button onClick={() => setCount(0)} className="btn reset">Reset</button>
          <button onClick={() => setCount(prev => prev + 1)} className="btn increment">+</button>
        </div>
      </div>
    </div>
  );
};

export default App;

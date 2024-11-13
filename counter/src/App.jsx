import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(10);

  const addValue = () => {
    setCount((preCount) => (preCount < 20 ? preCount + 1 : preCount));
  };

  const subtractValue = () => {
    setCount((preCount) => (preCount > 0 ? preCount - 1 : preCount));
  };

  return (
    <>
      <h1>Hello</h1>
      <button 
        onClick={addValue} 
        style={{ padding: '10px 20px', margin: '5px', fontSize: '16px', cursor: 'pointer' }}
      >
        Add VALUE: {count}
      </button>
      <br />
      <button 
        onClick={subtractValue} 
        style={{ padding: '10px 20px', margin: '5px', fontSize: '16px', cursor: 'pointer' }}
      >
        Subtract VALUE: {count}
      </button>
    </>
  );
}

export default App;

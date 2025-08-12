import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState('Hello World');
  const [isError, setIsError] = useState(false);

  useEffect(()=>{
    if(count <0){
      setMessage('Negative');
      setIsError(true);
    } else {
      setIsError(false);
    }
  }, [count]);

  return (
    <>
      <h1>Hello world</h1>
      <div className="card">

        {/* {count < 0 ? <h1>Negative</h1> : <h1>Possitive</h1>} */}
        {isError ? <h1 style={{color: 'red', background:'pink',padding:15, borderRadius: 5}}>{message}</h1> : <h1>Positive</h1>}

        <button onClick={() => setCount((count) => count -1)}> - 
        </button>
        {count}
        <button onClick={() => setCount((count) => count + 1)}> +   
        </button>
      </div>
      <p className="read-the-docs">
        This is my first react app.
      </p>
    </>
  )
}

export default App

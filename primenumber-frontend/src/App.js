import './App.css';
import {useState} from 'react'

function App() {
  
  const [valid, setValid] = useState(true);
  const [number, setNumber] = useState("Enter a number here");
  const [result, setResult] = useState(" ");


  function isPrimeNumber(input) {
    
    if(isNaN(input) || input.length === 0)
    {
      console.log(input + " is NaN")
      setResult(" ");
      setValid(false);
      return;
    }
    else if(parseInt(input) <= 0)
    {
      setResult("NOT PRIME");
      return;
    }
    else
    {
      for(let i = 2; i < parseInt(input); i++)
      {
        if(parseInt(input) % i === 0)
        {
          setResult("NOT PRIME");
          return;
        }
        
      }
    }

    setResult("PRIME");

  }

  function handleSubmit(e) {
    e.preventDefault();
    isPrimeNumber(number)
  }

  function handleChange(e) {
    setValid(true)
    setResult(" ")
    setNumber(e.target.value);
  }
  
  return (
    <>
    <div className="App">

      <div className='header'><p>Prime number calculator</p></div>

      <div className='dialog'>
        <p>
          {valid ? ' ' : 'Please enter a number.'}
        </p>
        <p>
          {result}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <input className='numberInput' type="text" placeholder={number} onChange={handleChange} />     
        <br></br>
        <input className='check-btn' type="submit" value="Check" />
      </form>

    </div>
    </>
  );
}

export default App;

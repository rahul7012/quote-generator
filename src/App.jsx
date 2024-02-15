import { useState } from 'react'
import './App.css'
import useFetch from './hooks/usefetch'

function App() {

  const result=useFetch("https://type.fit/api/quotes")
  
  const [quote, setQuote] = useState(null);
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * result.length);
    setQuote(result[randomIndex]);
  }
  return (
    <>
<div className="container d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
  <div className="row">
  <h1 className='text-center text-danger'>Quote of The Day</h1>
    <div className="border p-5 mt-5 rounded mb-5 align-items-center ">
      
       <div className="">
        <div className="quote">
        {quote && <h3>{quote.text}</h3>}
        </div>
        <hr />
        <div className="author d-flex justify-content-between">
        {quote && <h4 className='ms-5'>-{quote.author.split(',')[0]}</h4>}
        <button onClick={handleClick} className='btn btn-warning me-5'>Button</button>
        </div>
       </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App


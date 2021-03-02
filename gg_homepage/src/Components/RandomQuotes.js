 import React,{useState} from "react"


   const RandomQuotes = () => {
  
  const [quotes,setQuotes] = useState(null);
  const randomQuote = async () => {
    fetch('https://api.quotable.io/random')
    .then(r => r.json())
    .then(data => setQuotes(data));
  }
  console.log({quotes});
  return (
    <div>
      <p>
        <p>{quotes ? quotes.content : null}</p>
        <p>{quotes ? quotes.author : null}</p>
        {console.log({quotes})}
      </p>
      <button
        type="button"
        class="btn btn-dark btn-sm"
        onClick={async () => {await randomQuote()} }>Quotes!</button>
    </div>
    )
}



  export default RandomQuotes

  
  
  
  
  

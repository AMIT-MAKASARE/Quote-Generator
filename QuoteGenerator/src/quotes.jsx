import {useState } from 'react'
import './quotes.css'

function QuoteGenerator(){
   
    const[quote,setQuote]=useState({
        quote:"When I am silent, I have thunder hidden inside.",
        author:"Rumi"
    })

    let quotes=[]
    async function Quote(){
        const res = await fetch("http://localhost:3000/quotes")
        quotes =await res.json()
        }
        const random=()=>{
            const select= quotes[Math.floor(Math.random()*quotes.length)]
            setQuote(select)  
           
        }
        Quote()
    
   
    return(
        <>
           <div className="container">
               <h1>Quote Code</h1>
              <div className='quoteBox'>
                    <h2>{quote.quote}</h2> 
                    <h4>-{quote.author}</h4> 
              </div>
             
               <button   className='btn btn-generate' onClick={()=>{random()}}>Try new</button>
           </div>
        </>
    )
}
export default QuoteGenerator
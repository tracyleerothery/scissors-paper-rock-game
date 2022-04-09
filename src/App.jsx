import React, { useState } from "react"

//imports
import "./App.css";

function App() {
    //user options rock,paper,sissors
    const [userOption, setuserOption] = useState("")


    //state
    return (
        <div className = "app">
        <div className={`userimage ${userOption}`}> 
        <h1>Rock, Paper, Scissors</h1>
        <button onClick={() => setuserOption("paper")}>Paper</button>
        <button onClick={() => setuserOption("scissors")}>Scissors</button>
        <button onClick={() => setuserOption("rock")}>Rock</button>
      </div>
      </div>
        
 );
    
   
   }
   
   export default App;
   
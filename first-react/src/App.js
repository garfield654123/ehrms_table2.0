//import logo from './logo.svg';

import { useState } from "react";
import "./App.css";
import TextA from "./components/TextA";
import ExpenseItem from "./components/ExpenseItem";



function App() {
  const [A, SetA] = useState("喵");
  const expenses =[
    {
      id :'el',
      title:'toilet paper',
      amount: 94.12,
      date: new Date(2020,10,17),
    },
    {
      id :'edsfsdl',
      title:'water',
      amount: 532.13,
      date: new Date(2020,12,17),
    },
    {
      id :'edsfsdl',
      title:'tree',
      amount: 3413,
      date: new Date(2020,12,17),
    }

  ]
  const meow = () => {
    SetA(function plus(prev) {
      return prev + "喵";
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>{A}</h1>
        <button onClick={meow}>按鈕</button>

        <TextA textdata={A} />
        
                <ExpenseItem title ={expenses[0]}></ExpenseItem>
                <ExpenseItem title ={expenses[1]}></ExpenseItem>
                <ExpenseItem title ={expenses[2]}></ExpenseItem>
        
        
      </header>
    </div>
  );
}

export default App;

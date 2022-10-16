//import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
const [A, SetA] =useState('喵');

const meow=()=>{
  SetA (function plus(prev){
    return prev+'喵'
  })
}
return (
    <div className="App">
      <header className="App-header">
        
      
      <h1>{A}</h1>
      <button onClick={meow}>我是按鈕</button>
      <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;

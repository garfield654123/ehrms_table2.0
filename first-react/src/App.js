//import logo from './logo.svg';
<<<<<<< HEAD
import './App.css';
import ExpenseItem from './components/ExpenseItem';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
     
      <h1>喵</h1>
      
=======
import {useState} from 'react'
import './App.css';
import TextA from './components/TextA'
import ExpenseItem from './components/ExpenseItem';
function App() {
const [A, SetA] =useState('喵');
const meow=()=>{
  SetA (function plus(prev){
    return prev+'喵';
  });
}
return (
    <div className="App">
      <header className="App-header">
        
      
      <h1>{A}</h1>
      <button onClick={meow} >我是按鈕</button>
     
      <TextA textdata ={A} />

>>>>>>> dea4b931938e744c401d7011924f9ceae9b55454
      <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;

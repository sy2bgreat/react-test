import React, { useState } from 'react'
import './App.css'


function App() {
  const [show,funcShow] =useState(true);
  return (
    <div className="App">
      <button onClick={()=>funcShow(!show)}>See</button>
      {show ? <FuncComp></FuncComp> : null}
      <UrName></UrName>
      </div>
  );
}


const  FuncComp = () => {
  const [date, setDate] = useState((new Date()));

  return(
  <div className="container">
  <h2>Functional Style Component</h2>
  <p>Date : {date.toString()} </p>
  <button value='new Date' onClick={ () => { 
  setDate(new Date())}}>Date Reload</button>
  </div>    
  );
};

const UrName = () => {

  const [inputValue, setValue] = useState("");
  const [name,setName] =useState("");

  const setUser = (Event: React.ChangeEvent<HTMLInputElement>):void => {
    setValue(Event.target.value);
    };
  const updateName = (Event:React.MouseEvent) => {
    Event.preventDefault();
    setName(inputValue);
    setValue("");
    };
  return(
    <form>
    <p>Your Name : {name}</p>
    <input type="text" value={inputValue} onChange={setUser}></input>
    <button onClick={updateName}>Save</button>
    </form>

  );

};







export default App;

import React, { useState } from 'react'
import { ReactComponent as Logo } from '@assets/icons/logo.svg';
import './App.css'


function App() {
  const [show,funcShow] =useState(true);
  return (
    <div className="App">
      <Logo></Logo>
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

  const setUser = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setValue(event.target.value);
    };
  const updateName = (event:React.MouseEvent) => {
    event.preventDefault();
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

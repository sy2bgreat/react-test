import { setupMaster } from 'cluster';
import React, { useState } from 'react'



function App() {
  const [show,funcShow] =useState(true);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello World</h1>
      </header>
      <button onClick={()=>funcShow(!show)}>Functional Comp</button>
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
<button value="new date" onClick={ () => { 
  setDate(new Date())}}>Date Reload</button>
</div>    
  );
}

const UrName = () => {
  const [inputValue, setValue] = useState("");
  const [name,setName] =useState("");

  setUser = (e) => {
    setValue(e.target.value)
  }

  upDateName = (e) => {
    e.preventDefault();
    setName(inputValue);
    setValue("");
  }

return(
  <form>
    <p>Your Name ; {name}</p>
    <input type="text" value={inputValue} onChange={setUser}></input>
    <button onClick={upDateName}>Save</button>
  </form>

  )

};







export default App;

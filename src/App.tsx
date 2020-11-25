import React from 'react'
import { useState } from 'react';


function App() {
  const [show,funcShow] =useState(true);
  return (
    <div className="App">
      <header className="App-header">
      <h1>Hello World</h1>
      </header>
      <button onClick={()=>funcShow(!show)}>Functional Comp</button>
      {show ? <FuncComp></FuncComp> : null}
      </div>
  );
}


function FuncComp(){

const [_date, setDate] = useState((new Date()).toString());

  // const dateState = useState((new Date()).toString());
  // let _date = dateState[0];
  // let setDate = dateState[1];
 return(
<div className="container">
  <h2>Functional Style Component</h2>
<p>Date : {_date} </p>
<input type="button" value="new date" onClick={function(){
setDate(new Date().toString())}}></input>
</div>    
  );
}




export default App;

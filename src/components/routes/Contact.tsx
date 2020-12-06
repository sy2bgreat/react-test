import React, { useState } from 'react';



const Contact = () => {
    // const [inputValue, setValue] = useState('');
    const [name, setName ] = useState('');
    const [phone, setNumber] = useState('')
    const [mail, setMail] = useState('');
    const [country, setCountry] = useState<string>();
    //can't understand this part.. string?

    const handleSelect = (event:React.ChangeEvent<HTMLSelectElement>):void =>{
      setCountry(event.target.value);
    };

    return(
      <section>
        <h1>Contact</h1>
        <form className="contact-form">
          <label>Your Name : {name}</label>
          <input type="text" value={name} placeholder="Name" onChange={(event:React.ChangeEvent<HTMLInputElement>):void => {setName(event.target.value)}}></input>
          <input type="number" value={phone} placeholder="Phone Number" onChange={(event:React.ChangeEvent<HTMLInputElement>):void => {setNumber(event.target.value)}}></input>
          <label>Where Are You ?</label>
          <select value={country} placeholder="Country" onChange={()=>handleSelect}>
            <option value="South Korea">South Korea</option>
            <option value="Canada">Canada</option>
            <option value="Canada">Australia</option>
          </select> 
          <label>E-mail</label>
          <input type="email" value={mail} placeholder="E-mail" onChange={(event:React.ChangeEvent<HTMLInputElement>):void => {setMail(event.target.value)}}></input>
          <button type="submit">Submit</button>
        </form></section>
    );
  };

  export default Contact;
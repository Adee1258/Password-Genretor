import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './Data/passchar';

function App() {
 
    let [uppercase,setUppercase]=useState(false)
    let [lowercase,setLowercase]=useState(false)
    let [number,setNumber]=useState(false)
    let [Symbols,setSymbols]=useState(false)
    let [Passwordlen,setPasswordlen]=useState(10)
    let [fpass,setPass]=useState('')

    let createPassword=()=>{
      let finalpass=''
      let CharSet=''
     if(uppercase || lowercase || number || Symbols ){
     if( uppercase) CharSet+=UC;
     if(lowercase) CharSet+=LC;
     if(number) CharSet+=NC;
     if(Symbols) CharSet+=SC
       for(let i=0;i<Passwordlen;i++){
        finalpass+=CharSet.charAt(Math.floor(Math.random()*CharSet.length))
       }
       setPass(finalpass)
     }
     else{
      alert("please select checkbox!.....")
     }
    }
    let copyPass=()=>{
      navigator.clipboard.writeText(fpass)  //navigator is a javaScript`s object
    }
    return (
    <>
      <div className='Password-Box'>
        <h2>Password-Generator</h2>

        <div className='passwordboxin' >
          <input type='text' value={fpass} readOnly /> <button onClick={copyPass}>Copy</button>
        </div>

        <div className='Passlenth'>
          <label>Password Lenth</label>
          <input type='number' max={20} min={10} value={Passwordlen} onChange={(event)=>setPasswordlen(event.target.value)} />
        </div>

        <div className='Passlenth'>
          <label>Including uppercase letter</label>
          <input type='checkbox' checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
        </div>

        <div className='Passlenth'>
          <label>Including lowercase letter</label>
          <input type='checkbox'  checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>

        <div className='Passlenth'>
          <label>Including Number</label>
          <input type='checkbox'  checked={number} onChange={()=>setNumber(!number)}/>
        </div>

        <div className='Passlenth'>
          <label>Including Symbols</label>
          <input type='checkbox' checked={Symbols} onChange={()=>setSymbols(!Symbols)} />
        </div>
            <button className='btn' onClick={createPassword}> Generate Password</button>
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react'

import "./calculator.css"

export default function Calculator() {
  const [text,setText]=useState("");

  const updateTextArea=(event)=>{
    setText(event.target.value);}

  const operators=(param)=>{
    if (param==="=")
    {
      setText(eval(text));
    }
    else if(param==="c")
    {
      setText("")
    }
    else{
    
      setText(text+param);
    }

  console.log(text)
  }
  return (
    // <div className="container">
    //     <div className="mb-3">
    //         {/* step 1 inserting text box and increasing size of input box */}
    //         <label htmlFor="myBox" className="form-label"><h1>textbox</h1></label>
    //         {/* <textarea className="form-control" id="myBox" rows="3"></textarea>  [for small box]*/} 
            
    //         <textarea className="form-control" id="myBox" rows="4" cols="4" value={text} onChange={updateTextArea}></textarea>
    //     </div>

    //     <button className="btn btn-primary mx-1 my-1" onClick={()=>operators("+")}>+</button>
    //     {/* to pass value on on clicke use this method */}
    //     <button className="btn btn-primary mx-1 my-1" onClick={()=>operators("-")}>-</button>

        
    //     <button className="btn btn-primary mx-1 my-1" onClick={()=>operators("*")}>x</button>

        
    //     <button className="btn btn-primary mx-1 my-1" onClick={()=>operators("/")}>/</button>

        
    //     <button className="btn btn-primary mx-1 my-1" onClick={()=>operators("=")}>=</button>

        
    //     <button className="btn btn-primary mx-1 my-10" onClick={()=>operators("c")}>c</button>
        
    //   </div>


    <div className="calculator card">

  <input type="text" className="calculator-screen z-depth-1" value={text} disabled />

  <div className="calculator-keys">

    <button type="button" className="operator btn btn-info" value="+" onClick={()=>operators("+")}>+</button>
    <button type="button" className="operator btn btn-info" value="-" onClick={()=>operators("-")}>-</button>
    <button type="button" className="operator btn btn-info" value="*" onClick={()=>operators("*")}>&times;</button>
    <button type="button" className="operator btn btn-info" value="/" onClick={()=>operators("/")}>&divide;</button>

    <button type="button" value="7" className="btn btn-light waves-effect" onClick={()=>operators("7")}>7</button>
    <button type="button" value="8" className="btn btn-light waves-effect" onClick={()=>operators("8")}>8</button>
    <button type="button" value="9" className="btn btn-light waves-effect" onClick={()=>operators("9")}>9</button>
    <button type="button" value="4" className="btn btn-light waves-effect" onClick={()=>operators("4")}>4</button>
    <button type="button" value="5" className="btn btn-light waves-effect" onClick={()=>operators("5")}>5</button>
    <button type="button" value="6" className="btn btn-light waves-effect" onClick={()=>operators("6")}>6</button>
    <button type="button" value="1" className="btn btn-light waves-effect" onClick={()=>operators("1")}>1</button>
    <button type="button" value="2" className="btn btn-light waves-effect" onClick={()=>operators("2")}>2</button>
    <button type="button" value="3" className="btn btn-light waves-effect" onClick={()=>operators("3")}>3</button>
    <button type="button" value="0" className="btn btn-light waves-effect" onClick={()=>operators("0")}>0</button>
s
    <button type="button" className="equal-sign operator btn btn-default" value="=" onClick={()=>operators("=")}>=</button>

    <button type="button" className="decimal function btn btn-secondary" value="." onClick={()=>operators(".")}>.</button>
    <button type="button" className="all-clear function btn btn-danger btn-sm" value="c" onClick={()=>operators("c")}>AC</button>


  </div>
</div>



    
      
  )}



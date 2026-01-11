import React, { useState } from "react";
import "./calculator.css"

export default function Calculator(){
    const [value, setValue] = useState("")
    const [total, setTotal] = useState('');
    
    const handleCalculator =(e)=>{
       setValue(prev => prev + e);
  }

  const calcu =()=>{
    
    
    try{
        const result = Function(`return ${value}`)();
        if (result === undefined) {
      setTotal("Error");
      return;
    }
        // setValue(String(result));
        setTotal(String(result));
    }
    catch{
        
        setTotal("Error");
    }
  };

  const clearValue=()=>{
    setValue("");
    setTotal("");
  }

  
  

    return(
        <div className="calcu">
            <h1>React Calculator</h1>
            <input type="text" className="input" value={value} readOnly/>
            <div>{total}</div>
            <div className="calcu1">
             <div className="btn">
                    <button  onClick={()=>handleCalculator('7')} >7</button>
                    <button onClick={()=>handleCalculator('8')}>8</button>
                    <button onClick={()=>handleCalculator('9')}>9</button>
                    <button onClick={()=>handleCalculator('+')}>+</button>
                </div>
                <div className="btn1">
                    <button onClick={()=>handleCalculator('4')}>4</button>
                    <button onClick={()=>handleCalculator('5')}>5</button>
                    <button onClick={()=>handleCalculator('6')}>6</button>
                    <button onClick={()=>handleCalculator('-')}>-</button>
                </div>
                <div className="btn2">
                    <button onClick={()=>handleCalculator('1')}>1</button>
                    <button onClick={()=>handleCalculator('2')}>2</button>
                    <button onClick={()=>handleCalculator('3')}>3</button>
                    <button onClick={()=>handleCalculator('*')}>*</button>
                </div>
                <div className="btn3">
                    <button onClick={clearValue}>C</button>
                    <button onClick={()=>handleCalculator('0')}>0</button>
                    <button onClick={()=>calcu()}>=</button>
                    <button onClick={()=>handleCalculator('/')}>/</button>
                </div>
            </div>

        </div>
    )
}
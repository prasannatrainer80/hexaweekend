import React, {Component, useMemo, useState} from 'react';

const MemoExample1 = () => {
  
  const [number,setNumber] = useState(0);
  
  const squareNumber = (n) => {
    return Math.pow(n, 2);
  }
  const result = useMemo( () => squareNumber(number),[number]);
  return (
    <div>
      <h1>Use Memo Example</h1>
      Enter Number : 
      <input type="number" name="number" value={number} 
        onChange={ (e) => setNumber(e.target.value)} /> <br/><br/>
      <p>Result is : <b> {result}</b></p>
    </div>
  )
}

export default MemoExample1;
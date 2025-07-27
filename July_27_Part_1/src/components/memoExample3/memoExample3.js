import React, {Component, useMemo, useState} from 'react';

const MemoExample3 = () => {
  const [days,setDays] = useState(0);
  const daySal = 8000;

  const payment = (days) => {
    return daySal * days;
  }

  const takehome = (days) => {
    return payment(days) - (payment(days)/10);
  }

  
  const actualAmout = useMemo(() => payment(days),[days]);
  const cashOnHand = useMemo(() => takehome(days),[days]);
  return(
    <div>
      <label>Enter No.of Working Days </label>
      <input type="number" value={days} 
        onChange={ (e) => setDays(e.target.value)} /> 
        <br/><br/>
      <p>Amount to be Paid : {actualAmout}</p> <br/>
      <p>Payment after Tax (takehome) : {cashOnHand}</p>
    </div>
  )
}

export default MemoExample3;
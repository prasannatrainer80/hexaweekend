import React, {Component, useEffect, useRef, useState} from 'react';

const RefEx1 = () => {
  const [count,setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count])

  return(
    <div>
      <input type="button" value="Increment" 
        onClick={() => setCount(count+1)} /> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Decrement"
        onClick={() => setCount(count-1)} /> <hr/> 
      <p>Previoius Count Value : {prevCountRef.current}</p>
      <p>Actual Value : {count}</p>
    </div>
  )
}

export default RefEx1;
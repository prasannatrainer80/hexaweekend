import React, {Component} from 'react';

const ButtonEx = () => {

  const ajay = () => {
    alert("Hi I am Ajay...")
  }

  const sudheshna = () => {
    alert("Hi I am Sudheshna...");
  }

  const monisha = () => {
    alert("Hi I am Monisha...");
  }
  return(
    <div>
      <input type="button" value="Ajay" onClick={ajay} /> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Sudheshna" onClick={sudheshna} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Monisha" onClick={monisha} />
    </div>
  )
}

export default ButtonEx;
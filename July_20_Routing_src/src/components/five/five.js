import React, {Component, useState} from 'react';
import Menu from '../menu/menu';

const Five = () => {

  const [count,setCount] = useState(0)

  return(
    <div>
      <Menu />
      Count is : <b> {count} </b> <br/><br/> 
      <input type="button" value="Increment" onClick={() => setCount(count+1)} /> 
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="Decrement" onClick={() => setCount(count-1) }  />

    </div>
  )
}

export default Five;
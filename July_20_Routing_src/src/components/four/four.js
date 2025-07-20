import React, { useState } from 'react';
import Menu from '../menu/menu';

const Four = () => {

  const [name,setName] = useState("Ajay");

  const aarthi = () => {
    setName("Arthi");
  }

  const kishore = () => {
    setName("Kishore");
  }

  const arul = () => {
    setName("Arul");
  }

  return (
    <div>
      <Menu />
      Name is : <b>{name}</b> <br/> <br/>
      <input type="button" value="Aarthi" onClick={aarthi} />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Kishore" onClick={kishore} /> 
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Arul" onClick={arul} />
    </div>
  )
}

export default Four; 
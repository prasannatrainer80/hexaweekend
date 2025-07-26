import React, {Component} from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
  return(
    <div>
      Welcome to Menu Page <hr/>
        <Link to="/employShow">Employ Show</Link>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link to="/employSearch">Employ Search</Link>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link to="/addEmploy">Add Employ</Link>
    </div>
  )
}
export default Menu;
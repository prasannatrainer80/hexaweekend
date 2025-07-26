import React, {Component} from 'react';
import { Link } from 'react-router-dom';


const Menu = () => {
  return(
    <div>
      <p>Welcome to Menu Page</p>
        <Link to="/userShow">User Show</Link>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link to="/userSearch">User Search</Link>

    </div>
  )
}
export default Menu;
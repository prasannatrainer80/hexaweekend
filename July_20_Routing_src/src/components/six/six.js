import React, {Component, useState} from 'react';
import Menu from '../menu/menu';

const Six = () => {

  const [data, setData] =useState({
    firstName : '',
    lastName : '',
    fullName : ''
  })

  const show = () => {
    setData({
      fullName : data.firstName + " " +data.lastName
    })
  }

   const handleChange = event => {
        setData({
            ...data,[event.target.name] : event.target.value  
        })
    }


  return(
    <div>
      <Menu />
      <form>
        <label>Please Enter First Name :  </label>
        <input type="text" name="firstName"
          onChange={handleChange}
        value={data.firstName} />
        <br/><br/> 
        <label>Please Enter Last Name :   </label> 
        <input type="text" name="lastName" value={data.lastName} 
            onChange={handleChange} /> <br/><br/> 
        <label>Full Name </label>
        <input type="text" name="fullName" value={data.fullName} /> <br/>
        <input type="button" value="Show" onClick={show} />
      </form>
    </div>
  )
}

export default Six;
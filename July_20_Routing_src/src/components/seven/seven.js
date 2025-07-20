import React, {Component, useState} from 'react';
import Menu from '../menu/menu';

const Seven = () => {

  const [data,setData] = useState({
    firstNo : 0,
    secondNo : 0,
    result :0
  })

  const addition = () => {
   setData({
  ...data,
  result: parseInt(data.firstNo) + parseInt(data.secondNo)
})
  }

  const subtraction = () => {
     setData({
      ...data,
      result : parseInt(data.firstNo) - parseInt(data.secondNo)
    })
  }

  const multiplication = () => {
     setData({
      ...data,
      result : parseInt(data.firstNo) * parseInt(data.secondNo)
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
        <label>First Number :  </label>
        <input type="number" name="firstNo" value={data.firstNo}
          onChange={handleChange} /> <br/><br/>
        <label>Second Number : </label>
        <input type="number" name="secondNo" value={data.secondNo} 
            onChange={handleChange} /> <br/><br/>
        <label>Result </label>
        <input type="number" name="result" value={data.result} /> <br/><br/>
        <input type="button" value="Sum" onClick={addition} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" value="Sub" onClick={subtraction} />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="button" value="Mult" onClick={multiplication} />
      </form>
    </div>
  )
}

export default Seven;
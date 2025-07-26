import axios from 'axios';
import React, {Component, useState} from 'react';
import Menu from '../menu/menu';

const EmploySearch = () => {
    const[employResult, SetEmployResult] = useState({})
    const[empno,SetEmpNo] = useState(0) 
    
    const handleChange = event => {
        SetEmpNo(event.target.value)
        // alert(empno);
    }

     const show = () => {
        // alert(userId)
        let eid = parseInt(empno);
        axios.get("http://localhost:5285/api/Employs/"+eid).then(
            (response) => {
                SetEmployResult(response.data)
            }  
          )
    }

    return (
      <div>
        <Menu />
        <label>
                Employ No : </label>
            <input type="number" name="empno" 
                value={empno} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            Employ No : <b>{employResult.empno}</b> <br/>
            Employ Name : <b>{employResult.name}</b> <br/>
            Gender : <b>{employResult.gender}</b> <br/>
            Department : <b>{employResult.dept}</b> <br/>
            Designation : <b>{employResult.desig}</b> <br/>
            Basic : <b>{employResult.basic}</b> <br/>

      </div>
    )

}

export default EmploySearch;
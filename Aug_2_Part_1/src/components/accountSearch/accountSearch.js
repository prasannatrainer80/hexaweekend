import axios from 'axios';
import React, {Component, useState} from 'react';

const AccountSearch = () => {
    const[accountResult, SetAccountResult] = useState({})
    const[accountNo,SetAccountNo] = useState(0) 

     const handleChange = event => {
        SetAccountNo(event.target.value)
        // alert(empno);
    }

    const show = () => {
        // alert(userId)
        let accno = parseInt(accountNo);
        axios.get("http://localhost:5144/api/Accounts/"+accno).then(
            (response) => {
                SetAccountResult(response.data)
            }  
          )
    }

    return (
      <div>
        <label>
                Account No : </label>
            <input type="number" name="accountNo" 
                value={accountNo} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            Account No : <b>{accountResult.accountNo}</b> <br/>
            First Name : <b>{accountResult.firstName}</b> <br/>
            Last Name : <b>{accountResult.lastName}</b> <br/>
            City : <b>{accountResult.city}</b> <br/>
            State : <b>{accountResult.state}</b> <br/>
            Amount : <b>{accountResult.amount}</b> <br/>
            Cheq Facility : <b>{accountResult.cheqFacil}</b> <br/>
            Account Type : <b>{accountResult.accountType}</b> <br/>
      </div>
    )


}

export default AccountSearch;
import axios from 'axios';
import React, {Component, useEffect, useState} from 'react';

const AccountShow = () => {
  const[accounts,setAccountData] = useState([])

 useEffect(() => {
    const fetchData = async () => {
      const response = await 
        axios.get("http://localhost:5144/api/Accounts");
        setAccountData(response.data)
    }
    fetchData();
  },[])
  return (
    <div>
      <table border="3" align="center">
        <tr>
          <th>Account No</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>City</th>
          <th>State</th>
          <th>Amount</th>
          <th>Cheq Facil</th>
          <th>Account Type</th>
          
        </tr>
        {accounts.map((item) => 
        <tr>
          <td>{item.accountNo}</td>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.amount}</td>
          <td>{item.accountType}</td>
          <td>{item.cheqFacil}</td>
        </tr>
      )}
      </table>
    </div>
  )

}

export default AccountShow;
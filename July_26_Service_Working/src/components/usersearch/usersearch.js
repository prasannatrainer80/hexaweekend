import axios from 'axios';
import React, {useState} from 'react';
import Menu from '../menu/menu';

const UserSearch = () => {
    const[userResult, SetUserResult] = useState({})
    const[userId,SetUserId] = useState(0) 

    const handleChange = event => {
        SetUserId(event.target.value)
    }

    const show = () => {
      let uid = parseInt(userId);
      axios.get("https://jsonplaceholder.typicode.com/users/"+uid).then(
            (response) => {
                SetUserResult(response.data)
            }  
          )
    }
    return(
      <div>
        <Menu />
         <label>
                User Id : </label>
            <input type="number" name="userId" 
                value={userId} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
          User Id : {userResult.id} <br/>
          Name : {userResult.name} <br/>
          User Name : {userResult.username} <br/>
          Phone : {userResult.phone} <br/>
          Website : {userResult.website}
      </div>
    )

}

export default UserSearch;
import { useState } from "react"
import ProtectedService from "../Services/ProtectedService"

const Protected = () => {
    const [message,setMessage] = useState("")
    const protectedService = ProtectedService();
    const show = async () => {
        const response = await protectedService.adminDashBoard(); 
        // alert(response.data.message);
        setMessage(response.data.message);
    }
    return(   
    <div>
        <input type="button" value="Show Protected" onClick={show} /> <br/><br/>
        {message}
    </div>
    )
}

export default Protected
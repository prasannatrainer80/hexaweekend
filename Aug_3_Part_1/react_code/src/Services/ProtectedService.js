import axios from "axios"
import AuthHeader from "./AuthHeader";

const ProtectedService = () => {
    const adminDashBoard = async () => {
        try {
            const response = await axios.get("https://localhost:7118/api/SomeProtected", {
            headers: AuthHeader()
        });
          return response;
        }
        catch (error) {
            alert(error);
        }
    }
    return {
        adminDashBoard
    }
}

export default ProtectedService
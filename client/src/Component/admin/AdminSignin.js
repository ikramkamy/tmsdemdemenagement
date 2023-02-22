import React, { useReducer } from "react";

const AdminSignin=()=>{
    const [state, dispatch] = useReducer(AdminSignin);
  const { username, password, isLoading, error, isLoggedIn } = state;
    return(<div>
Email
        <input/>
Mot de passe
<input/>
    </div>)
}
export default AdminSignin;
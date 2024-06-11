
import { useEffect, useState } from "react";
import {CanceledError} from "./services/api-client";
import userService , { Users } from "./services/user-service";
import useUsers from "./hooks/useUsers";


function App() {
  const {users, error, isLoading} = useUsers()

  return ( 
    <>
    {error && <p className="text-danger">{error}</p>}
    
    {isLoading && <div className="spinner-border"></div>}
    <ul>
      {users.map(user=> <li key={user.id}>{user.name}</li>)}
    </ul>
    </>
   );
}

export default App;
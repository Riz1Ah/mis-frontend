
import { useEffect, useState } from "react";
import {CanceledError} from "./services/api-client";
import userService , { Users } from "./services/user-service";


function App() {
  const [users, setUsers ] = useState<Users[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=> {
    
    setIsLoading(true)
      const {request, cancel } = userService.getAllUsers()
      request.then(res => {
        setUsers(res.data)
        setIsLoading(false)
      })
      .catch(err=> {
        if(err instanceof CanceledError) return
        setError(err.message)
        setIsLoading(false)
      })

      return cancel;
  },[])

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
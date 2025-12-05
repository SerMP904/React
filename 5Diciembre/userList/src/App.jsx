import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { getUsers } from './components/ListUsersComponent';

function App() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
       const aux = await getUsers();
      setUsers(aux);
    }
    fetchUsers();
  }, []);

  return (
    <>
      {users !== null} ? ( <div>Cargando datos mockup</div> ) : ( <h1>Usuarios</h1>
        <h2>{users}</h2>
        <div>
          {users.forEach(user => (
              <div key={user.id}>
                <span>{user.name}</span>
                <span>{user.username}</span>
                <span>{user.email}</span>
              </div>
            ))}
            </div> )
    </>
)
}

export default App

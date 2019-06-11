import React,{ useState } from 'react';
import UserTable from './tables/UserTable';

const App=()=> {
  const usersData =[
    {id:1,
    name:'daniel',
    username:'crig'},
    {
    id:2,
    name:'Ben',
    username:'benis'
    }
  ]
  const [users,setUsers] = useState(usersData)

  return (
    <div className="container">
      <h1>CRUD WITH HOOKS </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>ADD USER</h2>
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
}
export default App;

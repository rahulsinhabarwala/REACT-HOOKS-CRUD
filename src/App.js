import React,{ useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
const App=()=> {
  const usersData =[
    {
      id:1,
      name:'daniel',
      username:'crig'},
    {
      id:2,
      name:'Ben',
      username:'benis'}
  ]
  const [users,setUsers] = useState(usersData)
  //adding new user 
  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users,user])
  }
  //deteting a user
  const deleteUser = id =>{
   setUsers(users.filter(user => user.id !==id)) 
  }
  //update user
  const[editing, setEditing] = useState()
  const initialFormState = { id:null,name:'',username:''}
  const [currentUser, setCurrentUser] = useState(initialFormState) 
  const updateUser = (id, updatedUser) => {
    setEditing(false) 
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing({id:user.id,name:'user.name',username:user.username});
  }

  return (
    <div className="container">
      <h1>CRUD WITH HOOKS </h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>ADD USER</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}
export default App;

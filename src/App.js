
import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import UserTable from './tables/UserTable'

const App = () => {
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

  // CRUD operations
  //ADD USER
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}
//DELETE USER
	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}
//UPDATE USER
	const updateUser = (id, updatedUser) => {
		setEditing(false)
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			<div className="flex-row">
				<div className="flex-large">
						<Fragment>{
              editing?(<h2>Editing</h2>)
              :
              (<h2>Add user</h2>
                )}
							<AddUserForm 
              addUser={addUser} 
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
              />
						</Fragment>
					
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)
}

export default App
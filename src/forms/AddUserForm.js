import React, { useState,useEffect } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '' }
    const [ user, setUser ] = useState(initialFormState)   

	const handleInputChange = event => {
		const { name, value } = event.target
		setUser({ ...user, [name]: value })
    }
    useEffect(() => {
      setUser(props.currentUser)
      if(!props.editing){
        setUser(initialFormState)
      }
    },[ props ])

	return (
      <>
		<form onSubmit={event => {
				event.preventDefault()
				if (props.editing){
                    props.updateUser(user.id, user)
                }
                else if (user.name || user.username){
                    props.addUser(user)
                }

                setUser(initialFormState)
                
                }}
                 >
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			{props.editing?(<>
            <button>Update user</button>
            <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button></>)
            :
            (<button>Add new user</button>)}
		</form>
	</>
    )
}
export default AddUserForm

// if(props.editing){
//     props.updateUser(user.id, user)
//     console.log("cool")
//     setUser(initialFormState)
//  }
//  else if(user.name || user.username){
//     props.addUser(user)  
//     setUser(initialFormState)
//  }
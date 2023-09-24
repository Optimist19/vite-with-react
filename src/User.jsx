import { useState } from 'react'

function User() {
	const [name, setName] = useState('')
	const [age, setAge] = useState('')
	const [action, setAction] = useState('')

	function displayUser(){
		setName("Peter")
		setAge(10)
		setAction("football")
	}


  return (
	<div>
		<p>User: {name}</p>
		<p>{name} is {age} years old</p>
		<p>{name} likes playing {action}
		</p>
		<button onClick={displayUser}>Click</button>
	</div>
  )
}

export default User
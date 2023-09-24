import { useState } from 'react'
import {data} from './data'


function Challenge() {

	const [name, setName] = useState('')
	const [user, setUser] = useState(data)


	
	function formSubmit(e){
		e.preventDefault()
		let a = Date.now()
		setUser(prev =>{
			return [...prev, {id: a, name: name }]
		})

		setName('')
		console.log(name)
	}

	function display(e){
		setName(e.target.value)
		console.log(name)
	}

	function removeUser(id){
		let people = user.filter(a =>{
			return a.id !== id
		})
		setUser(people)

	}

  return (
	<>
		
		<div>Challenge</div>
		<form onSubmit={formSubmit}>
			{user.map((a)=>{
				return(
					<div key={a.id}>

						<h4>{a.id}</h4>
						<h4>{a.name}</h4>
						<button onClick={() =>removeUser(a.id)}>Remove</button>
					</div>
				)
			})}

			<label htmlFor='name'>Name: </label>
			<input type='text' placeholder='Name' id='name' value={name} onChange={display} />	
			<button type='submit'>Submit</button>
		</form>
	</>
  )
}

export default Challenge
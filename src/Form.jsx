import { useState } from 'react'


function Challenge() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	function formSubmit(e){
		e.preventDefault()
		console.log(name, email)
	}
	
  return (

	<div>
		<div>Form</div>
		<form onSubmit={formSubmit}>
			<label htmlFor='name'>Name: </label>
			<input type='text' id='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
			<br />
			<label htmlFor='email'>Email: </label>
			<input type='email' id='email' placeholder='Name' value={email} onChange={(e)=>setEmail(e.target.value)} />
			<button type='submit'>Submit</button>
		</form>
	</div>
		
  )
}

export default Challenge
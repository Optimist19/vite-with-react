import {useEffect, useState} from 'react'

function UseEffectSam() {

	const [users, setUsers] = useState([])

	useEffect(()=>{
		fetch('https://api.github.com/users')
		.then(res => res.json())
		.then(result =>{
			console.log(result)
			setUsers(result)
		})
			
	},[])

	// const obj = users.map(a =>{
		// return {...a}
		// console.log({...a})
	
	// })

	// console.log(obj)

  return (
	<div>
		<h1>useEffect prac</h1>
		{users.map(a =>{
			return (
				<div key={a.id}>
					<img src={a.avatar_url} alt="" />
					<p>Name: {a.login}</p>
					<p>Link: {a.html_url}</p>
				</div>
			)
		})}
	</div>
  )
}

export default UseEffectSam
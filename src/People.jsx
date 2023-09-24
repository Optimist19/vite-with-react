import { useState } from "react"
import { data } from "./data"

function People() {

	const [state, setState] = useState(data)

	function delBtn(id){
		const newPeople = state.filter(a => a.id !== id )

		setState(newPeople)
		// setState(state.filter(a => a.id !== id ))
	}


	function clearPeople(){
		setState([])
	}

	const peps = state.map(a =>{
		return (
			<div  key={a.id}>
				<p>{a.id}</p>
				<p>{a.name}</p>
				<button onClick={()=>delBtn(a.id)}>delete</button>
			</div>
		)
	})

  return (
	<div>
		{peps}
		<button onClick={clearPeople}>Delete ALl</button>
	</div>
  )
}

export default People
import {useState} from 'react'

function Conditional() {

	const [state, setState] = useState(true)

	function toggle(){
		// setState(prev=>{
		// 	return prev = !prev
		// })

		setState(!state)
	}

  return (
	<div>
		<h1>Conditional</h1>
		<div>
			{state && <p>Hello World</p>}
		</div>
		<button onClick={toggle}>{state === true ? "Hide" : "View"}</button>
	</div>
  )
}

export default Conditional
import { useEffect, useState } from "react"

function Timer() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		if (counter < 999999){
			setTimeout(() => setCounter(counter + 1), 1000);
		}
	},[counter])

	return (
		<div>
			{counter}
		</div>
	)
}

export default Timer

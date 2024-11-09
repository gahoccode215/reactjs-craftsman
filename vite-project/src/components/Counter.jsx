import {useState} from 'react'

const Counter = () => {

  const [count, setCount] = useState(0)

	const handleIncrement = () => {
		setCount(count + 1)
	}

  return (
    <div>
			<h1>{count}</h1>
			<button onClick={handleIncrement}>Click to increment</button>
		</div>
  )
}

export default Counter
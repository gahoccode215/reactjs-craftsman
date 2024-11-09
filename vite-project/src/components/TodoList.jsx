import React, { useState } from 'react'

export const TodoList = () => {

	const [todo, setTodo] = useState([])
	const [inputValue, setInputValue] = useState("")


	const handleSubmit = (e) => {
		e.preventDefault()
		if (inputValue.trim()) {
			setTodo([...todo, inputValue])
			setInputValue("")
		}
	}

	return (
		<div>
			<h1>Todo List</h1>
			<form onSubmit={handleSubmit}>
				<input type='text' onChange={e => setInputValue(e.target.value)
				} value={inputValue} placeholder='Add a new Todo' />
				<button type='submit'>Add Todo</button>
			</form>
			<ul>
				{todo.map((i, index) => <li key={index + 1}>{i} + {index}</li>
				)}
			</ul>
		</div>
	)
}

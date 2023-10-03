import React, { useState } from "react";
export function App() {
	// const reikšmės nebekeisim
	// let reikšmė gali būt keičiama
	const [task, setTask] = useState("");
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const taskInputText = event.target.value;
		setTask(taskInputText);
	}
	console.log(task); // išveda į ekrana
	return (
		<div>
			<input type="text" onChange={event => handleChange(event)} />
			<button>submit</button>
			<p>{task}</p>
		</div>
	);
}
// 			<input type="text" onChange={event => handleChange(event)(PARAMETRAi)} />

// NEPRIDET TASKUS,

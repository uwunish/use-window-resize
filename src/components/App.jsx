import React from "react";
import UseWindowResize from "./UseWindowResize";

function App() {
	const { width, height } = UseWindowResize();
	return (
		<div>
			<h1>Use Window Resize Hook</h1>
			<p>Width : {width}</p>
			<p>Height : {height}</p>
		</div>
	);
}

export default App;

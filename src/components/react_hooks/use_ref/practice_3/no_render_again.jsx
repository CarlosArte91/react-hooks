import { useEffect, useRef, useState } from "react";

function NoRenderAgain() {
	/**
	 * Para este ejercicio se crea un estado y un renderizado del mismo con useState para mostrar que
	 * cada vez que cambia dicho estado el componente se renderiza de nuevo. Por otra parte, se crea
	 * una constante con useRef y de igual forma se renderiza su valor, posteriormente se cambia el valor
	 * de esta constante comprobando que la app no se renderiza como en el caso anterior.
	 * Se crea además un useEffect para verificar la renderización.
	 */

	const [count, setCount] = useState(0);
	const handleCount = () => {
		setCount(count + 1);
		console.log("Se actualizó useState");
	};

	const countRef = useRef(0);
	const handleCountRef = () => {
		countRef.current++;
		console.log(countRef.current);
		console.log("Se actualizó useRef");
	};

	useEffect(() => console.log("Se renderiza el componente!"));

	return (
		<div>
			<div>
				<h2>con useState = count: {count}</h2>
				<button onClick={handleCount} >Increment 1</button>
			</div>

			<hr />

			<div>
				<h2>con useRef = count: {countRef.current}</h2>
				<button onClick={handleCountRef} >Increment 2</button>
			</div>
		</div>
	);
}

export default NoRenderAgain;

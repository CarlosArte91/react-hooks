import { useEffect, useState } from "react";

function DidMountChield(props) {
	/**
	 * Para este ejercicio se tendŕa un useEffect que se ejecutará justo despues de
	 * que se renderice el componente por primera vez.
	 * Este es el comportamiento que realiza el metodo component did mount en un
	 * componente de clases, y para lograrlo con un componente funcional, basta con
	 * ejecutar el hook useEffect con el array de dependencias vacio.
	 */

	const [count, setCount] = useState(0);

	console.log("Hubo cambios");

	useEffect(() => {
		setCount(1);
		console.log("Ya se rederizó el componente");
	}, []);

	return (
		<div>
			{ count ? (
				<div>
					<h3>Value count: {count}</h3>
					<button onClick={() => setCount(count + 1)} >Change value</button>
				</div>
			) : null }
		</div>
	);
};

export default DidMountChield;

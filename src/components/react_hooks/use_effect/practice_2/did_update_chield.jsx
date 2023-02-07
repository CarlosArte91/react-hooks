import { useEffect, useState } from "react";

function DidUpdateChield(props) {
	/**
	 * Para este ejercicio se creará el componente el cual utilizará un useEffect.
	 * Este, suplantara al método did update component, el cual se usa en componentes
	 * de clases y cuyo propósito es ejecutar determinado codigo cada vez que se renderice
	 * el componente, sea por cambios en estados o en props.
	 * Para lograr esto en un componente funcional, se utiliza el useEffect sin el segundo
	 * parametro es decir, sin el array de dependencias.
	 */

	const [count, setCount] = useState(0);
	const handleCount = () => {
		setCount(count + 1);
	};

	useEffect(() => {
		console.log("Hay cambios en el componente");
	});

	return (
		<div>
			<h2>Count: {count}</h2>
			<button onClick={handleCount} >Increment</button>
		</div>
	);
};

export default DidUpdateChield;

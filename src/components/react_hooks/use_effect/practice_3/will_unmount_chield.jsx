import { useEffect } from "react";

function WillUnmountChield() {
	/**
	 * Para este ejercicio se creará un componente con el hook useEffect
	 * el cual retornará un callback, de esta forma se sustituye al metodo
	 * componen will unmount, metodo que se ejecuta justo antes de desmontarse
	 * el componente.
	 */

	useEffect(() => {
		return () => console.log("El componente se dejara de renderizar");
	}, []);

	return (
		<div>
			<h2>Componente hijo montado</h2>
		</div>
	);
};

export default WillUnmountChield;

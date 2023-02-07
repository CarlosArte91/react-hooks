import { useState } from "react";
import DidMountChield from "./did_mount_chield";

function DidMountFather() {
	/**
	 * Este componente se usará para renderizar al componente hijo y pasarle props,
	 * esto con el fin de verificar el comportamiento del hijo cuando cambian los
	 * props.
	 */

	const [name, setName] = useState("Father");

	const handleName = () => setName(`Other name ${(Math.random() * 100).toFixed(2)}`);

	return (
		<div>
			<h3>Name: {name}</h3>
			<button onClick={handleName} >Change name</button>
			<hr />
			<DidMountChield name={name} />
		</div>
	);
};

export default DidMountFather;

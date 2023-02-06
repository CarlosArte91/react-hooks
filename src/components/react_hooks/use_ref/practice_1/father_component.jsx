import { useState } from "react";
import ChildComponent from "./child_component";

function FatherComponent() {
	/**
	 * Para este ejercicio se crea un componente padre, el cual envia props al componente hijo
	 * en los props se incluye el estado y la funcion que lo cambiara, la cual se ejecutará
	 * en el componente hijo.
	 */

	const [name, setName] = useState('Carlos');

	return (
		<ChildComponent name={name} setName={setName} />
	);
};

export default FatherComponent;

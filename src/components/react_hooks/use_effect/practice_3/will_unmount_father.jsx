import { useState } from "react";
import WillUnmountChield from "./will_unmount_chield";

function WillUnmountFather() {
	/**
	 * Este componente renderizará al componente hijo de forma
	 * condicional, esto con el fin de verificar el comportamiento
	 * del componente hijo al desmontarse.
	 */

	const [mount, setMount] = useState(true);

	return (
		<div>
			{ mount ? <WillUnmountChield /> : null }
			<button onClick={() => setMount(!mount)} >{ mount ? "Hiden" : "Show" }</button>
		</div>
	);
};

export default WillUnmountFather;

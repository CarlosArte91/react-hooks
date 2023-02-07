import { useEffect, useRef, useState } from "react";
import DidUpdateChield from "./did_update_chield";

function DidUpdateFather() {
	/**
	 * Este componente se utilizará para renderizar al componente
	 * hijo y pasarle props, esto con el propósito de verificar el
	 * comportamiento de dicho componente.
	 */

	const [count, setCount] = useState(0);

	return (
		<div>
			<div>
				<h3>Count father: {count}</h3>
				<button onClick={() => setCount(count + 1)} >Increment father</button>
			</div>
			<DidUpdateChield num={count} />
		</div>
	);
};

export default DidUpdateFather;

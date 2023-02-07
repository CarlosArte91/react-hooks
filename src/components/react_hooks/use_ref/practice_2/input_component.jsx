import { useRef } from "react";

function InputComponent() {
	/**
	 * Para este ejercicio, se manipularan los estilos de un input
	 * a través del hook use ref.
	 */

	const inputRef = useRef();

	const handleInput = () => {
		inputRef.current.focus();
		inputRef.current.style.backgroundColor = "#AAC3EB"
		inputRef.current.style.outline = 'none';
		inputRef.current.style.borderRadius = "8px"
		inputRef.current.style.border = "3px solid #BFEB2A"
	};

	return (
		<div>
			<input type="text" ref={inputRef} />
			<hr></hr>
			<button onClick={handleInput}>Write</button>
		</div>
	);
}

export default InputComponent;

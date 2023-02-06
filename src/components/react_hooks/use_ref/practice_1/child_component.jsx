import { useRef } from "react";

function ChildComponent({ name, setName }) {
	/**
	 * El hook useRef se utiliza para hacer referencia a un elemento html a través de una constante
	 * y de esta forma poder acceder a sus propiedades y valores desde cualquier parte del código.
	 */
	const inputRef = useRef();

	const changeName = (event) => {
		event.preventDefault();
		setName(inputRef.current.value);
		inputRef.current.value = '';
	};

	return (
		<div>
			<h2>Hola, soy { name }</h2>
			<hr></hr>
			<form onSubmit={changeName}>
				<input ref={inputRef} type="text" placeholder="Name"/>
				<input type="submit" value="Change name" />
			</form>
		</div>
	);
};

export default ChildComponent;

import React, { useState } from 'react';

function CreateArea(props) {
	const [ input, setInput ] = useState({
		title: '',
		content: ''
	});

	const handleChange = (event) => {
		const { name, value } = event.target;

		setInput((prevValue) => {
			return {
				...prevValue,
				[name]: value
			};
		});
	};

	return (
		<div>
			<form
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<input name="title" placeholder="Title" onChange={handleChange} value={input.title} />
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					onChange={handleChange}
					value={input.content}
				/>
				<button
					onClick={() => {
						props.onAdd(input.title, input.content);
						setInput({
							title: '',
							content: ''
						});
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default CreateArea;

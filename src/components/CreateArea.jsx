import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
	const [ input, setInput ] = useState({
		title: '',
		content: ''
	});

	const [ isCollapsed, setIsCollapsed ] = useState(true);

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
				className="create-note"
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				{!isCollapsed && <input name="title" placeholder="Title" onChange={handleChange} value={input.title} />}

				<textarea
					onClick={() => {
						setIsCollapsed(false);
					}}
					name="content"
					placeholder="Take a note..."
					rows={isCollapsed ? '1' : '3'}
					onChange={handleChange}
					value={input.content}
				/>
				<Zoom in={!isCollapsed}>
					<Fab
						onClick={() => {
							props.onAdd(input.title, input.content);
							setInput({
								title: '',
								content: ''
							});

							setIsCollapsed(true);
						}}
					>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;

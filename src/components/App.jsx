import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
	const [ notes, setNotes ] = useState([]);

	const addNote = (title, content) => {
		// add a note to the notes array
		const newNote = {
			title,
			content
		};

		setNotes((prevNotes) => {
			return [ ...prevNotes, newNote ];
		});
	};

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />

			{notes.map((note, index) => {
				return <Note key={index} title={note.title} content={note.content} />;
			})}
			{/* <Note key={1} title="Note title" content="Note content" />
			<Note key={2} title="Note title" content="Note content" />
			<Note key={3} title="Note title" content="Note content" /> */}
			<Footer />
		</div>
	);
}

export default App;

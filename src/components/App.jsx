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

	const deleteNote = (id) => {
		setNotes((prevNotes) => {
			return prevNotes.filter((note, index) => {
				return id !== index;
			});
		});
	};

	return (
		<div>
			<Header />
			<CreateArea onAdd={addNote} />

			{notes.map((note, index) => {
				return (
					<Note key={index} id={index} title={note.title} content={note.content} removeNote={deleteNote} />
				);
			})}

			<Footer />
		</div>
	);
}

export default App;

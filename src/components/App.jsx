import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';

function App() {
	const [ notes, setNotes ] = useState([]);

	return (
		<div>
			<Header />
			<CreateArea />
			<Note key={1} title="Note title" content="Note content" />
			<Note key={2} title="Note title" content="Note content" />
			<Note key={3} title="Note title" content="Note content" />
			<Footer />
		</div>
	);
}

export default App;

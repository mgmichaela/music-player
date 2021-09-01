import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs }) => {
	return (
		<div className='library-container'>
			<h1>Library</h1>
			<div className='library'>
				{songs.map((song) => (
					<LibrarySong song={song}/>
					))};
			</div>
		</div>
	);
}

export default Library;
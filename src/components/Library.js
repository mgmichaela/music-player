import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ songs, setCurrentSong }) => {
	return (
		<div className='library-container'>
			<h1>Library</h1>
			<div className='library'>
				{songs.map((song) => (
					<LibrarySong
						song={song}
						songs={songs}
						setCurrentSong={setCurrentSong}
						id={song.id}
						key={song.id}
					/>
				))};
			</div>
		</div>
	);
}

export default Library;
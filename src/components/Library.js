import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({ audioRef, isPlaying, songs, setSongs, setCurrentSong }) => {
	return (
		<div className='library-container'>
			<h1>Library</h1>
			<div className='library'>
				{songs.map((song) => (
					<LibrarySong
						isPlaying={isPlaying}
						song={song}
						songs={songs}
						setSongs={setSongs}
						setCurrentSong={setCurrentSong}
						id={song.id}
						key={song.id}
						audioRef={audioRef}
					/>
				))};
			</div>
		</div>
	);
}

export default Library;
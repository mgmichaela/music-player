import React from 'react';

const LibrarySong = ({ song, songs, setCurrentSong, id }) => {
	const songSelectHandler = () => {
		const selectedSong = songs.filter((state) => state.id === id);
		setCurrentSong(selectedSong[0]);
	}
	return (
		<div onClick={songSelectHandler} className='library-song-container'>
			<img alt={song.name} src={song.cover} />
			<div className='song-description'>
				<h2>{song.name}</h2>
				<h3>{song.artist}</h3>
			</div>
		</div>
	)
}

export default LibrarySong;
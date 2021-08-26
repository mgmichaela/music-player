import React from 'react';

const LibrarySong = ({ song }) => {
	return (
		<div className='library-song-container'>
			<img alt={song.name} src={song.cover} />
			<h2>{song.name}</h2>
			<h3>{song.artist}</h3>
		</div>
	)
}

export default LibrarySong;
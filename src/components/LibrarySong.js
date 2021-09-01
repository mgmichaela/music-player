import React from 'react';

const LibrarySong = ({ song }) => {
	return (
		<div className='library-song-container'>
			<img alt={song.name} src={song.cover} />
			<div className='song-description'>
			<h2>{song.name}</h2>
			<h3>{song.artist}</h3>
			</div>
		</div>
	)
}

export default LibrarySong;
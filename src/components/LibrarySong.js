import React from 'react';

const LibrarySong = ({ audioRef, isPlaying, song, songs, setSongs, setCurrentSong, id }) => {
	const songSelectHandler = () => {
		const selectedSong = songs.filter((state) => state.id === id);
		setCurrentSong(selectedSong[0]);
		const currentSelectedSong = songs.map((song) => {
			if (song.id === id) {
				return {
					...song,
					active: true,
				}
			} else {
				return {
					...song,
					active: false,
				}
			}
		});
		setSongs(currentSelectedSong);
		if (isPlaying) {
			const playPromise = audioRef.current.play();
			if (playPromise !== undefined) {
				playPromise.then((audio) => {
					audioRef.current.play();
				});
			}
		}
	}
	return (
		<div
			onClick={songSelectHandler}
			className={`library-song-container ${song.active ? 'selected' : ''}`}>
			<img alt={song.name} src={song.cover} />
			<div className='song-description'>
				<h2>{song.name}</h2>
				<h3>{song.artist}</h3>
			</div>
		</div>
	)
}

export default LibrarySong;
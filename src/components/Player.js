import React, { useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ isPlaying, setIsPlaying, currentSong }) => {
	const audioRef = useRef(null);
	const playHandler = () => {
		if (isPlaying) {
			audioRef.current.pause();
			setIsPlaying(!isPlaying);
		} else {
			audioRef.current.play();
			setIsPlaying(!isPlaying);
		}
	};
	return (
		<div className='player'>
			<div className='time-control'>
				<p>Start Time</p>
				<input type='range' />
				<p>End Time</p>
			</div>
			<div className='play-control'>
				<FontAwesomeIcon className='play-back' size='2x' icon={faAngleLeft} />
				<FontAwesomeIcon onClick={playHandler} className='play' size='2x' icon={faPlay} />
				<FontAwesomeIcon className='play-forward' size='2x' icon={faAngleRight} />
			</div>
			<audio ref={audioRef} src={currentSong.audio} />
		</div>
	)
}

export default Player;
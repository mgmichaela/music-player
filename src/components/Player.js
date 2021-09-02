import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ isPlaying, setIsPlaying, audioRef, songSpan, setSongSpan }) => {
  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  }
  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  };
  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongSpan({ ...songSpan, currentTime: e.target.value });
  };
  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songSpan.currentTime)}</p>
        <input
          min={0}
          max={songSpan.duration}
          value={songSpan.currentTime}
          onChange={dragHandler}
          type='range'
        />
        <p>{getTime(songSpan.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon className='play-back' size='2x' icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon className='play-forward' size='2x' icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
import React, { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

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

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongSpan({ ...songSpan, currentTime: current, duration });
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
    )
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongSpan({ ...songSpan, currentTime: e.target.value });
  };

  const [songSpan, setSongSpan] = useState({
    currentTime: 0,
    duration: 0,
  });

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
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  );
};

export default Player;
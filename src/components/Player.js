import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({ isPlaying, setIsPlaying, audioRef, songSpan, setSongSpan, songs, currentSong, setCurrentSong }) => {
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

  const skipHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id == currentSong.id);
    if (direction == 'skip-back') {
      setCurrentSong(songs[currentIndex - 1])
    } if (direction == 'skip-forward') {
      setCurrentSong(songs[currentIndex + 1])
    }
  };

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{getTime(songSpan.currentTime)}</p>
        <input
          min={0}
          max={songSpan.duration || 0}
          value={songSpan.currentTime}
          onChange={dragHandler}
          type='range'
        />
        <p>{getTime(songSpan.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => skipHandler('skip-back')}
          className='play-back'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={playHandler}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => skipHandler('skip-forward')}
          className='play-forward'
          size='2x'
          icon={faAngleRight} />
      </div>
    </div>
  );
};

export default Player;
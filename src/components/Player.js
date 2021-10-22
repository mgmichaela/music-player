import React, { useEffect } from 'react';
import '../styles/player.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Player = ({
  isPlaying,
  setIsPlaying,
  audioRef,
  songSpan,
  setSongSpan,
  songs,
  setSongs,
  currentSong,
  setCurrentSong
}) => {
  useEffect(() => {
    const currentSelectedSong = songs.map((song) => {
      if (song.id === currentSong.id) {
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
  }, [currentSong]);

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

  const skipHandler = async (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === 'skip-forward') {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === 'skip-back') {
      if ((currentIndex - 1) % songs.length === - 1) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) {
          audioRef.current.play();
        }
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) {
      audioRef.current.play();
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
        <p>{songSpan.duration ? getTime(songSpan.duration) : '0:00'}</p>
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
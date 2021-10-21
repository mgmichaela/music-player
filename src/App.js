import React, { useState, useRef } from 'react';
import './styles/App.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import PlayList from './components/PlayList';
import Nav from './components/Nav';

const App = () => {
  const audioRef = useRef(null);
  const [songs, setSongs] = useState(PlayList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songSpan, setSongSpan] = useState({
    currentTime: 0,
    duration: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongSpan({ ...songSpan, currentTime: current, duration });
  };
  return (
    <div>
      <Nav 
      libraryStatus={libraryStatus}
      setLibraryStatus={setLibraryStatus}
      />
      <Song currentSong={currentSong} />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        songSpan={songSpan}
        songs={songs}
        setSongSpan={setSongSpan}
      />
      <Library
        audioRef={audioRef}
        isPlaying={isPlaying}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      />
    </div>
  )
}

export default App;

import React, { useState } from 'react';
import './styles/App.scss';
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';
import PlayList from './components/PlayList';

const App = () => {
  const [songs, setSongs] = useState(PlayList());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} />
    </div>
  )
}

export default App;

import React from 'react';
import './styles/App.scss';
import Player from './components/Player';
import Song from './components/Song';
import data from './components/PlayList';

const App = () => {
  return (
    <div>
      <Song />
      <Player />
    </div>
  )
}

export default App;

import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm'

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: 'almost home', id: 1 },
    { title: 'memory gospel', id: 2 },
    { title: 'this wild darkness', id: 3 }
  ]);
  //console.log(songs);
  const addSong = (title) => {
    setSongs([...songs, { title: title, id: uuid() }]);
  };

  useEffect(()=>{
    console.log("useEffect running with state ", songs)
  }, [songs])
  return (
    <div className="song-list">
      <ul>
        {songs.map(song => {
          return ( <li key={song.id}>{song.title}</li> );
        })}
      </ul>
      <NewSongForm addSong ={addSong} />
    </div>
  );
}

export default SongList;
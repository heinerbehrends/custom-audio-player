import React, { useState } from 'react';
import CustomPlayer from './CustomPlayer';

type multiplePlayersProps = {
  songs: string[];
};

export default function MultiplePlayers({ songs }: multiplePlayersProps) {
  const [isPlaying, setIsPlaying] = useState(null);
  return (
    <>
      {songs.map((song, id) => (
        <CustomPlayer
          id={id}
          audioFile={song}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      ))}
    </>
  );
}

import React from 'react';
import { ReactComponent as Play } from './icons/play.svg';
import { ReactComponent as Pause } from './icons/pause.svg';

type playButtonProps = {
  paused: boolean;
  play: Function;
  pause: Function;
  setIsPlaying: Function;
  id: number;
};

export default function PlayButton({
  paused,
  play,
  pause,
  setIsPlaying,
  id,
}: playButtonProps): JSX.Element {
  return (
    <button
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        margin: '0px',
        padding: '4px',
        fill: 'white',
        display: 'grid',
        placeItems: 'center',
        cursor: 'pointer',
      }}
      onClick={() => {
        paused ? play() : pause();
        setIsPlaying(id);
      }}
    >
      {paused ? <Play /> : <Pause />}
    </button>
  );
}

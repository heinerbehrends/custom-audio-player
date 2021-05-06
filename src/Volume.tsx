import React from 'react';
import { barStyles } from './ProgressBar';

type volumeProps = {
  volume: number;
  setVolume: Function;
};

export default function Volume({
  volume,
  setVolume,
}: volumeProps): JSX.Element {
  return (
    <div
      style={{
        display: 'grid',
        width: '120px',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          zIndex: 2,
          ...barStyles,
          width: `${volume * 100}%`,
          backgroundColor: 'gainsboro',
        }}
      />
      <div
        style={{
          zIndex: 1,
          ...barStyles,
          backgroundColor: 'gray',
        }}
      />

      <div
        onClick={(event) => {
          const width = (event.target as HTMLDivElement).offsetWidth;
          const clickPosition = event.clientX;
          const elementPosition = (event.target as HTMLDivElement).offsetLeft;
          const newVolume = (clickPosition - elementPosition) / width;
          setVolume(newVolume);
        }}
        style={{
          zIndex: 3,
          gridArea: '1 /1',
          cursor: 'pointer',
          height: '40px',
          width: '100%',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
}

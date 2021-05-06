import React from 'react';

type statusbarProps = {
  buffered: number;
  elapsed: number;
  duration: number;
  seek: Function;
};

export const barStyles = {
  gridArea: '1 /1',
  height: '10px',
  borderRadius: '2px',
};

export default function ProgressBar({
  buffered,
  elapsed,
  seek,
  duration,
}: statusbarProps): JSX.Element {
  // event.target.offsetWidth
  return (
    <div
      style={{
        display: 'grid',
        width: '100%',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '4px',
        marginRight: '20px',
      }}
    >
      <div
        style={{
          zIndex: 1,
          ...barStyles,
          backgroundColor: 'gray',
        }}
      />
      <div
        style={{
          zIndex: 1,
          ...barStyles,
          width: `${buffered}%`,
          backgroundColor: 'darkgray',
        }}
      />
      <div
        style={{
          zIndex: 2,
          ...barStyles,
          width: `${elapsed}%`,
          backgroundColor: 'gainsboro',
        }}
      />
      <div
        onClick={(event) => {
          const width = (event.target as HTMLDivElement).offsetWidth;
          const clickPosition = event.clientX;
          const elementPosition = (event.target as HTMLDivElement).offsetLeft;
          const timeToSeekTo =
            ((clickPosition - elementPosition) / width) * duration;
          console.log((event.target as HTMLDivElement).offsetWidth);
          seek(timeToSeekTo);
        }}
        style={{
          backgroundColor: 'transparent',
          cursor: 'pointer',
          zIndex: 3,
          height: '40px',
          gridArea: '1 /1',
        }}
      />
    </div>
  );
}

import React from 'react';

export default function TimeDisplay({
  time,
  style,
}: {
  time: number;
  style?: any;
}) {
  return (
    <span style={{ marginRight: '16px', ...style }}>{`${
      Math.floor(time / 60) % 60 < 10 ? '0' : ''
    }${Math.floor(time / 60) % 60}:${
      Math.floor(time % 60) < 10 ? '0' : ''
    }${Math.floor(time % 60)}`}</span>
  );
}

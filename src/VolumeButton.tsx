import React from 'react';
import { ReactComponent as VolumeUp } from './icons/volume_up.svg';
import { ReactComponent as VolumeDown } from './icons/volume_down.svg';
import { ReactComponent as VolumeOff } from './icons/volume_mute.svg';
import { ReactComponent as VolumeMute } from './icons/volume_off.svg';

export type volumeIconProps = {
  volume: number;
  muted: boolean;
  mute: Function;
  unmute: Function;
};

export function VolumeIcon({ volume, muted, mute, unmute }: volumeIconProps) {
  if (muted) {
    return <VolumeMute />;
  }
  if (volume < 0.2) {
    return <VolumeOff />;
  }
  if (volume < 0.8) {
    return <VolumeDown />;
  }
  return <VolumeUp />;
}

export default function VolumeButton({
  muted,
  mute,
  unmute,
  volume,
}: volumeIconProps) {
  return (
    <button
      onClick={() => (muted ? unmute() : mute())}
      style={{
        border: 'none',
        backgroundColor: 'transparent',
        margin: '0px',
        fill: 'white',
        height: '48px',
        padding: '8px 12px 8px 0px',
        cursor: 'pointer',
      }}
    >
      <VolumeIcon volume={volume} muted={muted} unmute={unmute} mute={mute} />
    </button>
  );
}

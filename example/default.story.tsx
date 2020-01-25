import * as React from 'react';
import { storiesOf } from '@storybook/react';
import SequencePlayer from '../src/SequencePlayer';
import SampleImage from './sample.png';

storiesOf('SequencePlayer', module)
  .add('default', () => {
    const playerRef = React.useRef<any>(null);

    const handleControl = (action: string) => () => {
      switch (action) {
        case 'play': playerRef.current.play(); break;
        case 'pause': playerRef.current.pause(); break;
        case 'resume': playerRef.current.resume(); break;
        case 'reverse': playerRef.current.reverse(); break;
      }
    };

    return (
      <div>
        <button onClick={handleControl('play')}>PLAY</button>
        <button onClick={handleControl('pause')}>PAUSE</button>
        <button onClick={handleControl('resume')}>RESUME</button>
        <button onClick={handleControl('reverse')}>REVERSE PLAY</button>
        <br/><br/>
        <SequencePlayer
          image={SampleImage}
          data={[
            { x: 0, y: 0 },
            { x: -183, y: 0 },
            { x: -366, y: 0 },
            { x: -545, y: 0 },
            { x: -732, y: 0 },
            { x: 0, y: -172 },
            { x: -183, y: -172 },
            { x: -366, y: -172 },
            { x: -549, y: -172 },
            { x: -732, y: -172 },
            { x: 0, y: -338 },
            { x: -183, y: -339 },
            { x: -363, y: -338 },
            { x: -549, y: -338 }
          ]}
          playerSize={{ width: 183, height: 168 }}
          imageSize={{ width: 918, height: 506 }}
          ref={playerRef}
          logging={true}
        />
      </div>
    );
  });

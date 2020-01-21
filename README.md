# react-sequence-player
[![ReactJs][react-image]][react-url]
[![Typescript][typescript-image]][typescript-url]
[![Download Count][download-image]][download-url]

[react-url]: https://reactjs.org
[react-image]: https://img.shields.io/badge/React-%5E16.9.0-blue
[typescript-url]: https://www.typescriptlang.org
[typescript-image]: https://img.shields.io/badge/Typescript-%5E3.7.0-brightgreen
[download-image]: http://img.shields.io/npm/dm/react-sequence-player.svg?style=flat
[download-url]: http://www.npmjs.com/package/react-sequence-player

- Image Sequence Player for ReactJS.
- Selectable Navgation Styles.
- <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS" target="_blank">What is Image Sprite?</a><br><br>

# Install
```
// npm
npm install react-sequence-player --save

// yarn
yarn add react-sequence-player
```

# Usage
```
import SequencePlayer from 'react-sequence-player';
import SequenceImage from 'your sequence image';

const SomeComponent = () => {
    const playerRef = React.useRef(null);

    const handleControl = (action) => () => {
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

            <SequencePlayer
                image={SampleImage}
                data={[
                    { x: -700, y: 0 },
                    { x: -600, y: 0 },
                    { x: -500, y: 0 },
                    { x: -400, y: 0 },
                    { x: -300, y: 0 },
                    { x: -200, y: 0 },
                    { x: -100, y: 0 },
                    { x: 0, y: 0 }
                ]}
                playerSize={{ width: 100, height: 230 }}
                imageSize={{ width: 800, height: 230 }}
                ref={playerRef}
            />
        </div>
    );
};
```
If You want to see more detail source,<br>
- [`example/default.story.tsx`](https://github.com/kimcoder/react-sequence-player/blob/master/example/default.story.tsx)<br>
- [`example/delay.story.tsx`](https://github.com/kimcoder/react-sequence-player/blob/master/example/delay.story.tsx)<br>

# Props
|Name|Type|Required|Description|Default|
|:--:|:--:|:-----:|:----------|:------|
|**image**|`String`|`Required`|image resource||
|**data**|`Array<{ x: number; y: number; }>`|`Required`|image sequence position array<br>[{ x: 0, y: 0 }, { x: 100, y: 0 }, { x: 100, y: 0 }]||
|**playerSize**|`{ width: number; height: number; }`|`Required`|image sprite contrainer(=div) size||
|**imageSize**|`{ width: number; height: number; }`|`Required`|image resource's size|`0.5`|
|**delay**|`Number`|`Optional`|sequence update delay|`50`|
|**logging**|`Boolean`|`Optional`|console logging in player component|`false`|
|**style**|`React.CSSProperties`|`Optional`|style object for image sprite contrainer|`undefined`|
|**forMobile**|`Boolean`|`Optional`|Toggle GPU Render|`false`|
|**onLoad**|`() => void`|`Optional`|image onLoad event callback|`undefined`|
|**onStart**|`() => void`|`Optional`|sequence event callback when started|`undefined`|
|**onPaused**|`() => void`|`Optional`|sequence event callback when paused|`undefined`|
|**onComplete**|`() => void`|`Optional`|sequence event callback when completed|`undefined`|

# Development
### directory & source
- ``./example/`` : storybook source for testing component
- ``./src/`` : component source
- ``./dist/`` : component distribution
- ``./rollup.config.js`` : rollup configure.

### scripts
```
// npm
npm run dev             // developing a component
npm run build           // build a component by rollup
npm run build:watch     // build watch mode

// yarn
yarn example
yarn build
yarn buidl:watch
```
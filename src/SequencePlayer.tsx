import * as React from 'react';

export type SPSize = { width: number; height: number; };
export type SPPosition = { x: number; y: number; };

type Props = {
  /**
   * Image source
   */
  image: any;
  data: Array<SPPosition>;
  playerSize: SPSize;
  imageSize: SPSize;
  delay?: number;
  logging?: boolean;
  style?: React.CSSProperties;
  forMobile?: boolean;
  onLoad?: () => void;
  onStart?: () => void;
  onPaused?: () => void;
  onComplete?: () => void;
};

const loaderStyle: React.CSSProperties = {
  width: 1,
  height: 1,
  position: 'absolute',
  left: -10000,
  top: -10000,
  visibility: 'hidden'
};

const SequencePlayer = (props: Props, ref: any) => {
  const [index, setIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isReverse, setIsReverse] = React.useState(false);
  const getSize = (size: number) => props.forMobile ? Math.round(size / 2) : size;

  const play = (idx: number = 0) => {
    props.logging && console.log('[SequencePlayer play]');
    props.onStart && props.onStart();
    setIndex(idx);
    setIsPlaying(true);
    setIsReverse(false);
    update();
  };

  const reverse = () => {
    props.logging && console.log('[SequencePlayer reverse]');
    if (index > 0) {
      props.onStart && props.onStart();
      setIsPlaying(true);
      setIsReverse(true);
      update();
    } else {
      props.logging && console.log('[SequencePlayer reverse] can not reverse, because idx is 0', index);
    }
  };

  const pause = (idx?: number) => {
    props.logging && console.log('[SequencePlayer pause]');
    if (idx) {
      setIndex(idx);
    }
    setIsPlaying(false);
    props.onPaused && props.onPaused();
  };

  const resume = () => {
    props.logging && console.log('[SequencePlayer resume]');
    isPlaying ? pause() : play(index);
  };

  const update = () => {
    if (!isPlaying) return;
    props.logging && console.log(`[SequencePlayer update] isReverse:${isReverse} ${index}/${props.data.length - 1}`);
    const isFirst: boolean = index === 0;
    const isLast: boolean = props.data.length === index + 1;

    if (!isReverse && isLast) {
      setIsPlaying(false);
      props.onComplete && props.onComplete();
    } else if (isReverse && isFirst) {
      setIsPlaying(false);
      props.onComplete && props.onComplete();
    } else if (isReverse && index > 1) {
      setIndex(index - 1);
    } else if (!isReverse && props.data.length > index + 1) {
      setIndex(index + 1);
    }
  };

  React.useImperativeHandle(ref, () => ({ play, resume, pause, reverse }));
  React.useEffect(() => {
    setTimeout(update, props.delay || 50);
  }, [index]);

  React.useEffect(() => {
    isPlaying && update();
  }, [isPlaying]);

  const overrideStyle: React.CSSProperties = {
    ...props.style,
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${props.image})`,
    backgroundPosition: `${getSize(props.data[index].x)}px ${getSize(props.data[index].y)}px`,
    width: `${props.playerSize.width}px`,
    height: `${props.playerSize.height}px`,
    backgroundSize: `${getSize(props.imageSize.width)}px ${getSize(props.imageSize.height)}px`
  };

  return (
    <>
      <img style={loaderStyle} src={props.image} onLoad={props.onLoad}/>
      <div style={overrideStyle}/>
    </>
  );
};

export default React.forwardRef(SequencePlayer);

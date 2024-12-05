import React from "react";
import { css } from "@emotion/react";
import { VideoProps } from "./types";
import { useInView } from "react-intersection-observer";
import Play from "icons/Play";

const PlayIconFilter = () => {
	return (
		<div
			css={css`
				background-color: var(--color-flamingo0500);
				position: absolute;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 100%;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				z-index: 1;
			`}
		>
			<Play width={90} height={90} />
		</div>
	)
}

export default (props: VideoProps) => {
	const { aspectRatio = 1, ...rest } = props;
	const { ref, inView } = useInView();
	const [isVideoPlayIconVisible, setVideoPlayVisibility] = React.useState(rest.autoPlay ? false : true);
	const videoPlayerTouchedRef = React.useRef(false);
	const videoRef = React.useRef<HTMLVideoElement | null>();

	if(rest.autoPlay && inView && !videoPlayerTouchedRef.current) {
		videoRef.current?.play();
	}

	const toggleVideo = React.useCallback(() => {
		if(!videoRef.current) return;
		videoPlayerTouchedRef.current = true;

		if(videoRef.current.paused || videoRef.current.ended) {
			videoRef.current.play();
		} else {
			videoRef.current.pause();

		}
	}, []);

	React.useEffect(() => {
		const onEndedHandler = () => setVideoPlayVisibility(true);
		const onPausedHandler = () => setVideoPlayVisibility(true);
		const onPlayHandler = () => setVideoPlayVisibility(false);

		videoRef.current?.addEventListener('pause', onPausedHandler);
		videoRef.current?.addEventListener('ended', onEndedHandler);
		videoRef.current?.addEventListener('play', onPlayHandler);
		videoRef.current?.addEventListener('click', toggleVideo);

		return () => {
			videoRef.current?.removeEventListener('pause', onPausedHandler);
			videoRef.current?.removeEventListener('ended', onEndedHandler);
			videoRef.current?.removeEventListener('play', onPlayHandler);
			videoRef.current?.removeEventListener('click', toggleVideo);
			videoRef.current = null;
		}
	}, []);

	return (
		<div
			ref={ref}
			css={css`
				border-radius: var(--spacing-sm);
				overflow: hidden;
				cursor: pointer;
				position: relative;
				aspect-ratio: ${aspectRatio};

				video {
					max-width: 100%;
					max-height: 100%;
					width: auto;
					height: auto;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					object-fit: contain;
					border-radius: var(--spacing-sm);
				}
			`}
		>
			{isVideoPlayIconVisible && (
				<div onClick={toggleVideo}>
					<PlayIconFilter />
				</div>
			)}
			<video muted={rest.muted || rest.autoPlay} crossOrigin="anonymous" ref={videoRef as any} {...rest} />
		</div>
	)
}

import React, { useRef, useState } from "react";
import { css } from "@emotion/react";
import { ImageZoomerProps } from "./types";

import ResponsiveDiv from "atoms/ResponsiveDiv";
import Image from "atoms/Image";

const styles = {
	imageZoomerContainer: css`
		position: relative;
		overflow: hidden;
		display: block;
		border-radius: var(--spacing-sm);
		aspect-ratio: 1;
		cursor: pointer;
	`,
	imageStyle: css`
		width: 100%;
		height: 100%;
		object-fit: cover;
	`
}

export default (props: ImageZoomerProps) => {
	const { passedCss: passedStyle, src } = props;
	const sourceRef = useRef<HTMLImageElement | null>(null);
  const targetRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
		if(!targetRef.current || !sourceRef.current || !containerRef.current) return;
    const targetRect = targetRef.current?.getBoundingClientRect();
    const sourceRect = sourceRef.current?.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: left * -xRatio,
      top: top * -yRatio
    });
  };

	return (
		<ResponsiveDiv
			ref={containerRef}
			css={css`
				${styles.imageZoomerContainer};
				${passedStyle};
			`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onMouseMove={handleMouseMove}
		>
			<img css={styles.imageStyle} ref={sourceRef} src={src} />
			<img
				ref={targetRef}
				src={src}
				css={css`
					position: absolute;
					left: ${offset.left}px;
					top: ${offset.top}px;
					opacity: ${opacity};
				`}
			/>
		</ResponsiveDiv>
	)
}

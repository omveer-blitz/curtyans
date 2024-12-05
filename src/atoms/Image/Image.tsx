import { ImageProps } from "./types";
import React from "react";
import { css } from "@emotion/react";
import { imageCache } from "services/imageCache";
import fastdom from "fastdom";

const placeholderImage = `https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png`;

const Image = (props: ImageProps): JSX.Element => {
  const { src, alt, ...rest } = props;
	const imageRef = React.useRef();

	const updateSrc = React.useCallback(() => {
		if(!imageRef.current) return;
		(imageRef.current as any).src = src;
	}, [src]);

	React.useEffect(() => {
		if(imageCache.isImageLoaded(src)) {
			fastdom.mutate(updateSrc);
		} else {
			imageCache.loadImage(src).then(() => {
				fastdom.mutate(updateSrc);
			})
		}
	}, [src, updateSrc]);

  return <img ref={imageRef as any} src={placeholderImage} alt={alt} {...rest} />;
};

export default Image;

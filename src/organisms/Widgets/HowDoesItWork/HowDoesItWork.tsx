import React from "react";
import { css } from "@emotion/react";

import Text from "atoms/Text";
import WidgetContainer from "atoms/WidgetContainer";
import Flexbox from "atoms/Flexbox";
import Video from "atoms/Video";
import { FlexboxItem } from "atoms/Flexbox/Flexbox";
import { HowDoesItWorkProps } from "./types";

const videoUrl = "https://kurtains.ae/wp-content/uploads/2024/01/sheer-are-closing-1.mp4";

export default (props: HowDoesItWorkProps) => (
	<WidgetContainer>
		<Text align="center" color="mine-shaft" fontStyleGuide="heading3" mb="2xl">{props.title}</Text>
		<Flexbox direction="row" justify="center" align="center">
			<FlexboxItem colspan={24} colspanXL={16}>
				<Video loop src={props.video_url || ''} aspectRatio={1.8} controls={false} autoPlay />
			</FlexboxItem>
		</Flexbox>
	</WidgetContainer>
)

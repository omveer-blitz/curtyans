import React from "react";
import { defaultFallbackInView } from 'react-intersection-observer';
defaultFallbackInView(true);


export const App = ({ children }) => {

	return (
		<>
			{children}
		</>
	);
};
